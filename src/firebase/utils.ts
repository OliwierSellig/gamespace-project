import { collection, doc, getDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "./firebase";

export function getUserDocRef(id: string) {
  const col = collection(firestore, "users");
  return doc(col, id);
}

export async function findUserDoc(id: string) {
  const document = getUserDocRef(id);
  return await getDoc(document);
}

export async function removeImageFromStorage(props: {
  type: "avatar" | "background";
  imageName: string;
}) {
  const imageRef = ref(storage, `${props.type}s/${props.imageName}`);
  try {
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}

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
