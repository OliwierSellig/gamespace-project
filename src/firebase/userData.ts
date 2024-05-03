import { updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { FirestoreUser } from "../utils/types/firebase";
import { storage } from "./firebase";
import { getUserCollectionsFromFirestore } from "./userCollections";
import { findUserDoc, getUserDocRef, urlToName } from "./utils";

// --------------------------- Getting full user data -------------------------------

export async function getFullUserData(id: string) {
  try {
    const userDoc = await findUserDoc(id);
    const collections = await getUserCollectionsFromFirestore({
      userID: id,
      collections: [
        "library",
        "wishlist",
        "reviews",
        "collections",
        "activities",
      ],
    });

    const collectionsObj = collections || {
      library: [],
      wishlist: [],
      reviews: [],
      collections: [],
      activities: [],
    };

    if (userDoc.exists) {
      return {
        profileSettings: userDoc.data(),
        ...collectionsObj,
      } as FirestoreUser;
    } else {
      console.error("User document not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user document:", error);
    return null;
  }
}

// ----------------------------------------------------------------------------------

// ------------------------- Updating user profile info -----------------------------

export async function updateUserInfo(
  id: string,
  data: { avatar: File | string; background: File | string; name: string },
) {
  try {
    const newAvatarList = data.avatar
      ? typeof data.avatar === "string"
        ? await updateRecentImagesList({
            type: "avatar",
            imageURL: data.avatar,
            id,
          })
        : await setNewImage(id, "avatar", data.avatar)
      : null;

    const newBackgroundList = data.background
      ? typeof data.background === "string"
        ? await updateRecentImagesList({
            type: "background",
            imageURL: data.background,
            id,
          })
        : await setNewImage(id, "background", data.background)
      : null;

    const docRef = getUserDocRef(id);

    const document = await findUserDoc(id);

    const updatedDocObject = {
      recentAvatars: newAvatarList || document.data().recentAvatars,
      recentBackgrounds: newBackgroundList || document.data().recentBackgrounds,
      gamespaceName: data.name || document.data().gamespaceName,
    };

    await updateDoc(docRef, updatedDocObject);
    return updatedDocObject;
  } catch (error) {
    console.error("Error updating user info:", error);
    return null;
  }
}

// ----------------------------------------------------------------------------------

// ----------------------- Setting new image of given type --------------------------

export async function setNewImage(
  id: string,
  type: "avatar" | "background",
  file: File,
  creatingUser?: boolean,
) {
  try {
    if (!file) return null;

    const newName = `${id}-${Math.ceil(Math.random() * 1000)}`;

    const imageRef = ref(storage, `${type}s/${newName}`);

    await uploadBytes(imageRef, file);

    const newURL = await getDownloadURL(imageRef);

    const imageList = !creatingUser
      ? updateRecentImagesList({ type, imageURL: newURL, id })
      : [newURL];

    return imageList;
  } catch (error) {
    return null;
  }
}

// ----------------------------------------------------------------------------------

// ---------------------- Udpating recent images list--------------------------------

export async function updateRecentImagesList(props: {
  type: "avatar" | "background";
  imageURL: string;
  id: string;
}) {
  const maxLength = props.type === "avatar" ? 6 : 3;
  const docSnapshot = await findUserDoc(props.id);

  const docRef = getUserDocRef(props.id);

  const recentImageList: string[] =
    docSnapshot.data()[
      props.type === "avatar" ? "recentAvatars" : "recentBackgrounds"
    ];

  const filteredArray = recentImageList.includes(props.imageURL)
    ? recentImageList.filter((avatar) => avatar !== props.imageURL)
    : recentImageList.length >= maxLength
      ? recentImageList.slice(0, -1)
      : recentImageList;

  if (recentImageList.length >= maxLength)
    removeImageFromStorage({
      type: props.type,
      imageName: urlToName({ type: props.type, url: recentImageList.at(-1) }),
    });

  const newArray = [props.imageURL, ...filteredArray];

  const updatedDocObject =
    props.type === "avatar"
      ? { recentAvatars: newArray }
      : { recentBackgrounds: newArray };

  await updateDoc(docRef, updatedDocObject);

  return newArray;
}

// ----------------------------------------------------------------------------------

// --------------------- Removing given image from storage---------------------------

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

// ----------------------------------------------------------------------------------
