"use client";

import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { BasicItemType, ChildrenProp } from "../../utils/types/types";
import {
  removeDocumentFromFirestoreCollection,
  updateDocumentsInFirestoreCollections,
} from "../../firebase/userCollections";
import { useActivities } from "../activitiesContext/ActivitiesContext";
import { useUser } from "../userContext/UserContext";

// ------------------------- Creating Context ---------------------------------------

const WishlistContext = createContext<ContextType | undefined>(undefined);

// ------------------------- Setting Context Type -----------------------------------

type ContextType = {
  checkInWishlist: (id: number) => BasicItemType;
  addToWishlist: (game: BasicItemType) => Promise<void>;
  removeFromWishlist: (id: number) => Promise<void>;
};
// ------------------------- Creating a Provider ------------------------------------

function WishlistProvider({ children }: ChildrenProp) {
  const { state, setCollection } = useUser();
  const { wishlist, id } = state;
  const { addActivity } = useActivities();

  // ------------------------------ Get Functions -----------------------------------

  function checkInWishlist(id: number) {
    return wishlist.find((game) => game.id === id);
  }

  // ------------------------ Wishlist Manipulations -------------------------------

  async function addToWishlist(game: BasicItemType) {
    if (checkInWishlist(game.id)) {
      toast.error("You already have this game in wishlist");
      return;
    }
    const newList = [...wishlist, game];
    await updateDocumentsInFirestoreCollections({
      collectionType: "wishlist",
      userID: id,
      documentData: [game],
    });
    setCollection({ type: "wishlist", value: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "addToWishlist",
          item: { name: game.name, id: game.id },
        },
      },
    ]);
    toast.success("Successfully added game to wishlist");
  }

  async function removeFromWishlist(id: number) {
    const targetGame = checkInWishlist(id);

    if (!targetGame) {
      toast.error("You don't have this game in your wishlist");

      return;
    }
    const newList = wishlist.filter((game) => game.id !== id);
    await removeDocumentFromFirestoreCollection({
      userID: state.id,
      documentID: id.toString(),
      collectionType: "wishlist",
    });
    setCollection({ type: "wishlist", value: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "removeFromWishlist",
          item: { name: targetGame.name, id: targetGame.id },
        },
      },
    ]);
    toast.success("Successfully removed game from wishlist");
  }

  return (
    <WishlistContext.Provider
      value={{
        checkInWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  const value = useContext(WishlistContext);
  if (value === undefined)
    throw new Error("Wishlist context was used outside of a provider");
  return value;
}

export { useWishlist, WishlistProvider };
