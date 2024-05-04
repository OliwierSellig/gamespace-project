"use client";

import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import {
  BasicItemType,
  ChildrenProp,
  CollectionItemType,
  CollectionPropsType,
} from "../../utils/types/types";
import {
  removeDocumentFromFirestoreCollection,
  updateDocumentsInFirestoreCollections,
} from "../../firebase/userCollections";
import { useUser } from "../UserContext";
import { useActivities } from "../activitiesContext/ActivitiesContext";

const CollectionsContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  addToCollections: (newCollection: CollectionPropsType) => Promise<number>;
  removeFromCollections: (id: number) => Promise<void>;
  findCollection: (id: number) => CollectionItemType;
  updateCollection: (
    action:
      | {
          type: "updateDetails";
          content: {
            title: string;
            description: string;
          };
        }
      | {
          type: "addGame" | "removeGame";
          game: BasicItemType;
        },
    collectionID: number,
  ) => Promise<void>;
  checkGameInCollection: (gameID: number, collectionID: number) => boolean;
};
function CollectionsProvider({ children }: ChildrenProp) {
  const { state, setCollection } = useUser();
  const { id, collections } = state;
  const { addActivity } = useActivities();

  // ------- Manipulating Collections -----------

  function findCollection(id: number) {
    return collections.find((collection) => collection.id === id);
  }

  async function addToCollections(newCollection: CollectionPropsType) {
    const randomID = Math.ceil(Math.random() * 10000);
    if (findCollection(randomID)) {
      toast.error("Collection with that ID already exists.");
      return;
    }
    const newCollectionObj = { ...newCollection, id: randomID };
    const newList = [...collections, newCollectionObj];
    await updateDocumentsInFirestoreCollections({
      collectionType: "collections",
      userID: id,
      documentData: [newCollectionObj],
    });
    setCollection({ type: "collections", value: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "startCollection",
          item: { name: newCollection.title, id: randomID },
        },
      },
    ]);
    toast.success("Collection created succesfully");
    return randomID;
  }

  async function removeFromCollections(id: number) {
    const targetCollection = findCollection(id);

    if (!targetCollection) {
      toast.error("There is no collection with that ID");
      return;
    }
    const filteredList = collections.filter(
      (collection) => collection.id !== id,
    );
    await removeDocumentFromFirestoreCollection({
      userID: state.id,
      documentID: id.toString(),
      collectionType: "collections",
    });
    setCollection({ type: "collections", value: filteredList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "deleteCollection",
          item: { name: targetCollection.title, id: targetCollection.id },
        },
      },
    ]);
    toast.success("Collection removed successfully");
  }

  async function updateCollection(
    action:
      | {
          type: "updateDetails";
          content: { title: string; description: string };
        }
      | { type: "addGame" | "removeGame"; game: BasicItemType },
    collectionID: number,
  ) {
    const targetCollection = findCollection(collectionID);
    if (!targetCollection) {
      toast.error("There is no collection with that ID");
      return;
    }

    const filteredCollections = collections.filter(
      (collection) => collection.id !== collectionID,
    );

    function setUpdatedCollection() {
      switch (action.type) {
        case "updateDetails": {
          addActivity([
            {
              date: new Date(),
              action: {
                type: "updateCollection",
                item: { name: targetCollection.title, id: targetCollection.id },
              },
            },
          ]);
          return {
            ...targetCollection,
            title: action.content.title,
            description: action.content.description,
          };
        }
        case "removeGame": {
          addActivity([
            {
              date: new Date(),
              action: {
                type: "removeGameFromCollection",
                item: {
                  collectionName: targetCollection.title,
                  collectionId: targetCollection.id,
                  gameName: action.game.name,
                  gameId: action.game.id,
                },
              },
            },
          ]);
          return {
            ...targetCollection,
            games: targetCollection.games.filter(
              (game) => game.id !== action.game.id,
            ),
          };
        }
        case "addGame": {
          if (
            targetCollection.games.find((game) => game.id === action.game.id)
          ) {
            toast.error("This collection already have such game.");
            return;
          }
          addActivity([
            {
              date: new Date(),
              action: {
                type: "addGameToCollection",
                item: {
                  collectionName: targetCollection.title,
                  collectionId: targetCollection.id,
                  gameName: action.game.name,
                  gameId: action.game.id,
                },
              },
            },
          ]);
          return {
            ...targetCollection,
            games: [...targetCollection.games, action.game],
          };
        }
      }
    }

    const updatedCollection = setUpdatedCollection();

    const newList = [...filteredCollections, updatedCollection];

    await updateDocumentsInFirestoreCollections({
      userID: state.id,
      collectionType: "collections",
      documentData: [updatedCollection],
    });

    setCollection({ type: "collections", value: newList });
    toast.success("Collection modified successfully");
  }

  function checkGameInCollection(gameID: number, collectionID: number) {
    const targetCollection = findCollection(collectionID);
    if (!targetCollection) return false;
    return Boolean(targetCollection.games.find((game) => game.id === gameID));
  }

  // ---------------------------------------------

  return (
    <CollectionsContext.Provider
      value={{
        addToCollections,
        removeFromCollections,
        updateCollection,
        findCollection,
        checkGameInCollection,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
}

function useCollections() {
  const value = useContext(CollectionsContext);
  if (value === undefined)
    throw new Error("Collections context was used outside of a provider");
  return value;
}

export { useCollections, CollectionsProvider };
