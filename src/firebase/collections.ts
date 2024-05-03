import { setDoc } from "firebase/firestore";
import { CollectionItemType } from "../utils/types/types";
import { getSingleDocumentRef } from "./utils";

export async function updateFirestoreCollection(props: {
  userID: string;
  newCollection: CollectionItemType;
}) {
  try {
    const reviewRef = getSingleDocumentRef({
      collection: "collections",
      userID: props.userID,
      documentID: props.newCollection.id.toString(),
    });

    await setDoc(reviewRef, props.newCollection);
  } catch (error) {
    console.error("Error updating collection:", error);
  }
}
