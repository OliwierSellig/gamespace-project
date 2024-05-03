import { collection, doc, getDoc } from "firebase/firestore";
import { FirestoreCollectionType } from "../utils/types/firebase";
import { firestore } from "./firebase";

// ---------- Getting a referance of single doucment in 'users' collection ----------

export function getUserDocRef(id: string) {
  const col = collection(firestore, "users");
  return doc(col, id);
}

// ----------------------------------------------------------------------------------

// ---------- Getting a document object of given user -------------------------------

export async function findUserDoc(id: string) {
  const document = getUserDocRef(id);
  return await getDoc(document);
}

// ----------------------------------------------------------------------------------

// ---------- Geting a name from image in storage based on it's url -----------------

export function urlToName(props: {
  type: "avatar" | "background";
  url: string;
}) {
  const prefix = props.type === "avatar" ? "avatars%2F" : "backgrounds%2F";
  const startIndex = props.url.indexOf(prefix);
  const endIndex = props.url.indexOf("?alt=media");

  if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
    return props.url.substring(startIndex + prefix.length, endIndex);
  } else {
    return null;
  }
}

// ----------------------------------------------------------------------------------

// ------------ Geting a referane of given user collection --------------------------

export function getUserCollectionRef(props: {
  collection: "library" | "wishlist" | "reviews" | "collections" | "activities";
  id: string;
}) {
  return collection(firestore, "users", props.id, props.collection);
}

// ----------------------------------------------------------------------------------

// ------- Geting a referane of a single element in given user collection -----------

export function getSingleDocumentRef(props: {
  collection: FirestoreCollectionType;
  userID: string;
  documentID: string;
}) {
  const colRef = getUserCollectionRef({
    collection: props.collection,
    id: props.userID,
  });
  return doc(colRef, props.documentID);
}

// ----------------------------------------------------------------------------------

// ---------------- Setting a Timestamp Objct to a Date Object ----------------------

export function setTimestampSecondsToDate(timestamp: {
  seconds: number;
  nanoseconds: number;
}) {
  return new Date(timestamp.seconds * 1000);
}

// ----------------------------------------------------------------------------------
