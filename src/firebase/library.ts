import { updateDoc } from "firebase/firestore";
import { getSingleUserGameRef } from "./utils";

export async function toggleFavouriteFirebase(props: {
  userID: string;
  gameID: string;
  isFavourite: boolean;
}) {
  try {
    const singleGameRef = getSingleUserGameRef({
      userID: props.userID,
      gameID: props.gameID,
    });

    await updateDoc(singleGameRef, { isFavourite: props.isFavourite });
    return true;
  } catch (error) {
    console.error("Error toggling favourite:", error);
    return false;
  }
}
