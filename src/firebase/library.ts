import { deleteDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { LibraryItemType } from "../utils/types/types";
import { getSingleUserGameRef, getUserCollectionRef } from "./utils";

export async function getFirestoreLibrary(id: string) {
  try {
    const gamesRef = getUserCollectionRef({ id, collection: "library" });
    const gamesSnapshot = await getDocs(gamesRef);

    const gamesArray = gamesSnapshot.docs.map((doc) => {
      return doc.data();
    });

    return gamesArray;
  } catch (error) {
    console.error("Error getting library:", error);
    return [];
  }
}

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
