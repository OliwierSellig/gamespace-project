"use client";

import { createContext, useContext } from "react";
import { ActivityItem, ChildrenProp } from "../../utils/types/types";
import { updateDocumentsInFirestoreCollections } from "../../firebase/userCollections";
import { useUser } from "../UserContext";

const ActivitiesContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  addActivity: (newActivities: ActivityItem[]) => Promise<void>;
  transformActivityIntoString(activity: ActivityItem): (
    | string
    | {
        name: string;
        url: string;
      }
  )[];
  filterActivities: (filter: string) => ActivityItem[];
};
function ActivitiesProvider({ children }: ChildrenProp) {
  const { state, setCollection } = useUser();
  const { id, activities } = state;

  // ------- Manipulating Activities -------------

  async function addActivity(newActivities: ActivityItem[]) {
    await updateDocumentsInFirestoreCollections({
      collectionType: "activities",
      userID: id,
      documentData: newActivities,
    });
    const newList = [...activities, ...newActivities];
    setCollection({ type: "activities", value: newList });
  }

  function transformActivityIntoString(activity: ActivityItem) {
    switch (activity.action.type) {
      case "addToLibrary":
        return [
          "Added",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "to",
          { name: "Library", url: "/user/library" },
        ];
      case "removeFromLibrary":
        return [
          "Removed",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "from",
          { name: "Library", url: "/user/library" },
        ];
      case "addToFavourites":
        return [
          "Added",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "to",
          { name: "Favourites", url: "/user/overview" },
        ];
      case "removeFromFavourites":
        return [
          "Removed",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "from",
          { name: "Favourites", url: "/user/overview" },
        ];
      case "addToWishlist":
        return [
          "Added",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "to",
          { name: "Wishlist", url: "/user/wishlist" },
        ];
      case "removeFromWishlist":
        return [
          "Removed",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
          "from",
          { name: "Wishlist", url: "/user/wishlist" },
        ];
      case "publishReview":
        return [
          "Published review of",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}/review`,
          },
        ];
      case "deleteReview":
        return [
          "Deleted review of",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}`,
          },
        ];
      case "updateReview":
        return [
          "Updated review of",
          {
            name: activity.action.item.name,
            url: `/games/${activity.action.item.id}/review`,
          },
        ];
      case "startCollection":
        return [
          "Started collection called",
          {
            name: activity.action.item.name,
            url: `/collection/${activity.action.item.id}`,
          },
        ];
      case "deleteCollection":
        return [
          "Deleted collection called",
          {
            name: activity.action.item.name,
            url: `/collections/${activity.action.item.id}`,
          },
        ];
      case "updateCollection":
        return [
          "Updated collection called",
          {
            name: activity.action.item.name,
            url: `/collections/${activity.action.item.id}`,
          },
        ];
      case "addGameToCollection":
        return [
          "Added",
          {
            name: activity.action.item.gameName,
            url: `/games/${activity.action.item.gameId}`,
          },
          "to",
          {
            name: activity.action.item.collectionName,
            url: `/collections/${activity.action.item.collectionId}`,
          },
        ];
      case "removeGameFromCollection":
        return [
          "Removed",
          {
            name: activity.action.item.gameName,
            url: `/games/${activity.action.item.gameId}`,
          },
          "from",
          {
            name: activity.action.item.collectionName,
            url: `/collections/${activity.action.item.collectionId}`,
          },
        ];
      default:
        return [];
    }
  }

  function filterActivities(filter: string) {
    const activitiesList = [...activities];
    function getFilteredStrings() {
      switch (filter) {
        case "library": {
          return ["addToLibrary", "removeFromLibrary"];
        }
        case "wishlist": {
          return ["addToWishlist", "removeFromWishlist"];
        }
        case "favourites": {
          return ["addToFavourites", "removeFromFavourites"];
        }
        case "reviews": {
          return ["publishReview", "updateReview", "deleteReview"];
        }
        case "collections": {
          return ["startCollection", "updateCollection", "deleteCollection"];
        }
        default:
          return [];
      }
    }

    const filteredStrings = getFilteredStrings();

    const filteredList = !filteredStrings.length
      ? activitiesList
      : activitiesList.filter((activity) =>
          filteredStrings.includes(activity.action.type),
        );

    const sortedList = filteredList.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return sortedList;
  }

  // ---------------------------------------------

  return (
    <ActivitiesContext.Provider
      value={{
        addActivity,
        transformActivityIntoString,
        filterActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}

function useActivities() {
  const value = useContext(ActivitiesContext);
  if (value === undefined)
    throw new Error("Activities context was used outside of a provider");
  return value;
}

export { useActivities, ActivitiesProvider };
