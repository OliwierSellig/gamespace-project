import { deleteDoc } from "firebase/firestore";
import { getSingleDocumentRef } from "./utils";

export async function removeReviewFromUserFirestore(props: {
  userID: string;
  reviewID: string;
}) {
  try {
    const reviewRef = getSingleDocumentRef({
      collection: "reviews",
      userID: props.userID,
      documentID: props.reviewID,
    });
    await deleteDoc(reviewRef);
  } catch (error) {
    console.error("Error adding game:", error);
  }
}
