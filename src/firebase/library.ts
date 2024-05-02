import { deleteDoc, setDoc, updateDoc } from "firebase/firestore";
import { LibraryItemType } from "../utils/types/types";
import { getSingleUserGameRef } from "./utils";

export async function addGameToUserFirestore(props: {
  id: string;
  game: LibraryItemType;
}) {
  try {
    const singleGameRef = getSingleUserGameRef({
      userID: props.id,
      gameID: props.game.id.toString(),
    });

    await setDoc(singleGameRef, props.game);
  } catch (error) {
    console.error("Error adding game:", error);
  }
}

export async function removeGameFromUserFirestore(props: {
  userID: string;
  gameID: string;
}) {
  try {
    const singleGameRef = getSingleUserGameRef({
      userID: props.userID,
      gameID: props.gameID,
    });
    await deleteDoc(singleGameRef);
  } catch (error) {
    console.error("Error adding game:", error);
  }
}

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
