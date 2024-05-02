import { deleteDoc, setDoc } from "firebase/firestore";
import { BasicItemType } from "../utils/types/types";
import { getSingleWishlistGameRef } from "./utils";

export async function addGameToUserFirestoreWishlist(props: {
  id: string;
  game: BasicItemType;
}) {
  try {
    const singleGameRef = getSingleWishlistGameRef({
      userID: props.id,
      gameID: props.game.id.toString(),
    });

    await setDoc(singleGameRef, props.game);
  } catch (error) {
    console.error("Error adding game:", error);
  }
}

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
