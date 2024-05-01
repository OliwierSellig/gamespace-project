import { updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirestoreUser } from "../utils/types/firebase";
import { getFirestoreActivities } from "./activities";
import { storage } from "./firebase";
import { getFirestoreLibrary } from "./library";
import { getFirestoreReviews } from "./reviews";
import {
  findUserDoc,
  getUserDocRef,
  removeImageFromStorage,
  urlToName,
} from "./utils";
import { getFirestoreWishlist } from "./wishlist";

export async function getUserBackgrounds(id: string): Promise<string | null> {
  try {
    const docSnapshot = await findUserDoc(id);

    if (docSnapshot.exists) {
      const backgrounds = docSnapshot.data().recentBackgrounds;
      return backgrounds;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user background image:", error);
    return null;
  }
}

export async function getUserAvatars(id: string): Promise<string | null> {
  try {
    const docSnapshot = await findUserDoc(id);

    if (docSnapshot.exists) {
      const avatars = docSnapshot.data().recentAvatars;
      return avatars;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user avatar:", error);
    return null;
  }
}

export async function getUserName(id: string): Promise<string | null> {
  try {
    const docSnapshot = await findUserDoc(id);

    if (docSnapshot.exists) {
      const name = docSnapshot.data().gamespaceName;
      return name;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user GamespaceName:", error);
    return null;
  }
}

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

export async function getFullUserData(id: string) {
  try {
    const userDoc = await findUserDoc(id);
    const library = await getFirestoreLibrary(id);
    const wishlist = await getFirestoreWishlist(id);
    const activities = await getFirestoreActivities(id);
    const reviews = await getFirestoreReviews(id);

    console.log(reviews);

    if (userDoc.exists) {
      return {
        profileSettings: userDoc.data(),
        library,
        wishlist,
        activities,
        reviews,
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
