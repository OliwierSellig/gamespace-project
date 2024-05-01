import { deleteDoc, getDocs, setDoc } from "firebase/firestore";
import { ReviewType } from "../utils/types/types";
import { getSingleUserRef, getUserCollectionRef } from "./utils";

export async function getFirestoreReviews(id: string) {
  try {
    const reviewsRef = getUserCollectionRef({ id, collection: "reviews" });
    const reviewsSnapshot = await getDocs(reviewsRef);

    const reviewsArray = reviewsSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        editDate: new Date(doc.data().editDate.seconds * 1000),
      };
    });
    return reviewsArray as ReviewType[];
  } catch (error) {
    console.error("Error getting reviews:", error);
    return [];
  }
}

export async function updateReviewUserFirestore(props: {
  userID: string;
  newReview: ReviewType;
}) {
  try {
    const reviewRef = getSingleUserRef({
      collection: "reviews",
      userID: props.userID,
      documentID: props.newReview.game.id.toString(),
    });

    await setDoc(reviewRef, props.newReview);
  } catch (error) {
    console.error("Error updating review:", error);
  }
}

export async function removeReviewFromUserFirestore(props: {
  userID: string;
  reviewID: string;
}) {
  try {
    const reviewRef = getSingleUserRef({
      collection: "reviews",
      userID: props.userID,
      documentID: props.reviewID,
    });
    await deleteDoc(reviewRef);
  } catch (error) {
    console.error("Error adding game:", error);
  }
}

// export async function updateReviewInUserFirestore(props: {
//   id: string;
//   game: LibraryItemType;
// }) {
//   try {
//     const singleGameRef = getSingleUserGameRef({
//       userID: props.id,
//       gameID: props.game.id.toString(),
//     });

//     await setDoc(singleGameRef, props.game);
//   } catch (error) {
//     console.error("Error adding game:", error);
//   }
// }
