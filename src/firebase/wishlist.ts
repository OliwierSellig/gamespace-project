import { deleteDoc } from "firebase/firestore";
import { getSingleWishlistGameRef } from "./utils";

export async function removeGameFromUserFirestoreWishlist(props: {
  userID: string;
  gameID: string;
}) {
  try {
    const singleGameRef = getSingleWishlistGameRef({
      userID: props.userID,
      gameID: props.gameID,
    });
    await deleteDoc(singleGameRef);
  } catch (error) {
    console.error("Error removing game:", error);
  }
}
