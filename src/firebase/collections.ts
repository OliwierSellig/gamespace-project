import { deleteDoc, setDoc } from "firebase/firestore";
import { CollectionItemType } from "../utils/types/types";
import { getSingleUserRef } from "./utils";

export async function updateFirestoreCollection(props: {
  userID: string;
  newCollection: CollectionItemType;
}) {
  try {
    const reviewRef = getSingleUserRef({
      collection: "collections",
      userID: props.userID,
      documentID: props.newCollection.id.toString(),
    });

    await setDoc(reviewRef, props.newCollection);
  } catch (error) {
    console.error("Error updating collection:", error);
  }
}

export async function removeFireStoreCollection(props: {
  userID: string;
  collectionID: string;
}) {
  try {
    const collectionRef = getSingleUserRef({
      collection: "collections",
      userID: props.userID,
      documentID: props.collectionID,
    });
    await deleteDoc(collectionRef);
  } catch (error) {
    console.error("Error removing collection:", error);
  }
}
