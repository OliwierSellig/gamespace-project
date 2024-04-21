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
  console.log(imageRef);
  try {
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}

// export async function getImageObjectFromStorage(props: {
//   type: "avatar" | "background";
//   propType: "url" | "name";
//   propContent: string;
// }) {
//   const folderRef = ref(storage, `${props.type}s/`);

//   try {
//     const items = await listAll(folderRef);

//     for (const item of items.items) {
//       if (props.propType === "url") {
//         const imageUrl = await getDownloadURL(item);
//         if (imageUrl === props.propContent) {
//           return {
//             name: item.name,
//             url: imageUrl,
//           };
//         }
//       } else {
//         if (item.name === props.propContent) {
//           const imageUrl = await getDownloadURL(item);
//           return {
//             name: item.name,
//             url: imageUrl,
//           };
//         }
//       }
//     }
//     return null;
//   } catch (error) {
//     console.error("Error finding image:", error);
//     return null;
//   }
// }

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

// https://firebasestorage.googleapis.com/v0/b/gamespace-project.appspot.com/o/avatars%2F5SWJppg1zcPChR57n4KvAgCsdQZ2-16?alt=media&token=09ba228b-0593-480c-87af-c85cc5a1938b

// https://firebasestorage.googleapis.com/v0/b/gamespace-project.appspot.com/o/avatars%2F5SWJppg1zcPChR57n4KvAgCsdQZ2-633?alt=media&token=0c3c926e-8404-4ec9-b511-a9c058cd1c64

// https://firebasestorage.googleapis.com/v0/b/gamespace-project.appspot.com/o/backgrounds%2F5SWJppg1zcPChR57n4KvAgCsdQZ2-616?alt=media&token=f7898078-8807-4df7-b97f-b21d3ea5c585
