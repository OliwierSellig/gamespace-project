import { deleteDoc, getDocs, setDoc } from "firebase/firestore";
import { BasicItemType } from "../utils/types/types";
import { getSingleWishlistGameRef, getUserCollectionRef } from "./utils";

export async function getFirestoreWishlist(id: string) {
  try {
    const wishlistRef = getUserCollectionRef({ id, collection: "wishlist" });
    const wishlistSnapshot = await getDocs(wishlistRef);

    const wishlistArray = wishlistSnapshot.docs.map((doc) => {
      return doc.data();
    });

    return wishlistArray;
  } catch (error) {
    console.error("Error getting wishlist:", error);

    return [];
  }
}

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
