"use client";

import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { ChildrenProp, ReviewType } from "../../utils/types/types";
import {
  removeDocumentFromFirestoreCollection,
  updateDocumentsInFirestoreCollections,
} from "../../firebase/userCollections";
import { useUser } from "../UserContext";
import { useActivities } from "../activitiesContext/ActivitiesContext";

const ReviewsContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  updateReviews: (newReview: ReviewType) => Promise<void>;
  findInReviews: (id: number) => ReviewType;
  removeFromReviews: (id: number) => Promise<void>;
  sortReviews: (sortBy: string) => ReviewType[];
  getLatestReviews: () => ReviewType[];
};
function ReviewsProvider({ children }: ChildrenProp) {
  const { state, setCollection } = useUser();
  const { id, reviews } = state;
  const { addActivity } = useActivities();

  // ------- Manipulating Reviews ----------------

  function findInReviews(id: number) {
    return reviews.find((review) => review.game.id === id);
  }

  async function updateReviews(newReview: ReviewType) {
    const inReviews = Boolean(findInReviews(newReview.game.id));
    const filteredList = inReviews
      ? reviews.filter((review) => review.game.id !== newReview.game.id)
      : [...reviews];
    const newList = [...filteredList, newReview];
    await updateDocumentsInFirestoreCollections({
      collectionType: "reviews",
      userID: id,
      documentData: [newReview],
    });
    setCollection({ type: "reviews", value: newList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: inReviews ? "updateReview" : "publishReview",
          item: { name: newReview.game.name, id: newReview.game.id },
        },
      },
    ]);
    toast.success("Successfully updated reviews");
  }

  async function removeFromReviews(id: number) {
    const targetReview = findInReviews(id);
    if (!targetReview) return;
    const filteredList = reviews.filter((review) => review.game.id !== id);
    await removeDocumentFromFirestoreCollection({
      userID: state.id,
      documentID: id.toString(),
      collectionType: "reviews",
    });
    setCollection({ type: "reviews", value: filteredList });
    addActivity([
      {
        date: new Date(),
        action: {
          type: "deleteReview",
          item: { name: targetReview.game.name, id: targetReview.game.id },
        },
      },
    ]);
    toast.success("Successfully removed game from reviews");
  }

  function sortReviews(sortBy: string) {
    const sortList = [...reviews];

    switch (sortBy) {
      case "relevance":
        return sortList.sort(
          (a, b) =>
            new Date(b.editDate).getTime() - new Date(a.editDate).getTime(),
        );
      case "rating":
        return sortList.sort((a, b) => b.rating - a.rating);
      case "game-title":
        return sortList.sort((a, b) => {
          if (a.game.name < b.game.name) {
            return -1;
          }
          if (a.game.name > b.game.name) {
            return 1;
          }
        });
      default:
        return sortList;
    }
  }

  function getLatestReviews() {
    return [...reviews]
      .sort(
        (a, b) =>
          new Date(b.editDate).getTime() - new Date(a.editDate).getTime(),
      )
      .slice(0, 2);
  }

  // ---------------------------------------------

  return (
    <ReviewsContext.Provider
      value={{
        updateReviews,
        removeFromReviews,
        findInReviews,
        sortReviews,
        getLatestReviews,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

function useReviews() {
  const value = useContext(ReviewsContext);
  if (value === undefined)
    throw new Error("Reviews context was used outside of a provider");
  return value;
}

export { useReviews, ReviewsProvider };
