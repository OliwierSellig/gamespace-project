import { updateDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { FirestoreUser } from "../utils/types/firebase";
import { storage } from "./firebase";
import {
  findUserDoc,
  getUserDocRef,
  removeImageFromStorage,
  urlToName,
} from "./utils";

export async function getUserBackground(id: string): Promise<string | null> {
  try {
    const docSnapshot = await findUserDoc(id);

    if (docSnapshot.exists) {
      const backgroundUrl = docSnapshot.data().background;
      return backgroundUrl;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user background image:", error);
    return null;
  }
}

export async function getUserAvatar(id: string): Promise<string | null> {
  try {
    const docSnapshot = await findUserDoc(id);

    if (docSnapshot.exists) {
      const avatar = docSnapshot.data().avatar;
      return avatar;
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

export async function getUserCreatedAt(id: string): Promise<string | null> {
  try {
    const docSnapshot = await findUserDoc(id);

    if (docSnapshot.exists) {
      const createdAt = docSnapshot.data().createdAt;
      return createdAt;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user creation date:", error);
    return null;
  }
}

export async function updateUserInfo(
  id: string,
  data: { avatar: File | string; background: File | string; name: string },
  setLoading: (isLoading: boolean) => void,
) {
  try {
    setLoading(true);

    const newAvatarURL = data.avatar
      ? typeof data.avatar === "string"
        ? data.avatar
        : await setNewImage(id, "avatar", data.avatar)
      : "";
    const newBackgrounURL = data.background
      ? typeof data.background === "string"
        ? data.background
        : await setNewImage(id, "background", data.background)
      : "";

    if (data.avatar && typeof data.avatar === "string") {
      updateRecentImagesList({
        type: "avatar",
        imageName: urlToName({ type: "avatar", url: data.avatar }),
        id,
      });
    }

    if (data.background && typeof data.background === "string") {
      updateRecentImagesList({
        type: "background",
        imageName: urlToName({ type: "background", url: data.background }),
        id,
      });
    }

    const docRef = getUserDocRef(id);

    const document = await findUserDoc(id);

    await updateDoc(docRef, {
      background: newBackgrounURL || document.data().background,
      avatar: newAvatarURL || document.data().avatar,
      gamespaceName: data.name || document.data().gamespaceName,
    });

    return newBackgrounURL;
  } catch (error) {
    console.error("Error updating user info:", error);
  } finally {
    setLoading(false);
  }
}

type Avatar = { url: string; name: string };

export async function getUserAvatars(id: string): Promise<Avatar[]> {
  const avatarsRef = ref(storage, "avatars");
  const userAvatars: Avatar[] = [];

  try {
    const listResult = await listAll(avatarsRef);
    await Promise.all(
      listResult.items.map(async (itemRef) => {
        const avatarUserId = itemRef.name.split("-").at(0);
        if (avatarUserId === id) {
          const url = await getDownloadURL(itemRef);
          userAvatars.push({ url, name: itemRef.name });
        }
      }),
    );
    return userAvatars;
  } catch (error) {
    console.error("Error fetching avatars:", error);
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
    if (!file) return "";

    const newName = `${id}-${Math.ceil(Math.random() * 1000)}`;

    const imageRef = ref(storage, `${type}s/${newName}`);

    if (!creatingUser) updateRecentImagesList({ type, imageName: newName, id });

    await uploadBytes(imageRef, file);

    return await getDownloadURL(imageRef);
  } catch (error) {
    return "";
  }
}

export async function setPreviousImage(props: {
  type: "background" | "avatar";
  url: string;
  id: string;
}) {
  updateRecentImagesList({
    type: props.type,
    imageName: urlToName({ type: props.type, url: props.url }),
    id: props.id,
  });

  return props.url;
}

export async function updateRecentImagesList(props: {
  type: "avatar" | "background";
  imageName: string;
  id: string;
}) {
  const maxLength = props.type === "avatar" ? 6 : 3;
  const targetImage = ref(storage, `${props.type}s/${props.imageName}`);

  const docSnapshot = await findUserDoc(props.id);

  const docRef = getUserDocRef(props.id);

  const recentImageList: string[] =
    docSnapshot.data()[
      props.type === "avatar" ? "recentAvatars" : "recentBackgrounds"
    ];

  const filteredArray = recentImageList.includes(targetImage.name)
    ? recentImageList.filter((avatar) => avatar !== targetImage.name)
    : recentImageList.length >= maxLength
      ? recentImageList.slice(0, -1)
      : recentImageList;

  if (recentImageList.length >= maxLength)
    removeImageFromStorage({
      type: props.type,
      imageName: recentImageList.at(-1),
    });

  const newArray = [props.imageName, ...filteredArray];

  const updatedDocObject =
    props.type === "avatar"
      ? { recentAvatars: newArray }
      : { recentBackgrounds: newArray };

  await updateDoc(docRef, updatedDocObject);
}

export async function listUserRecentImagsAsUrl(props: {
  type: "avatar" | "background";
  id: string;
}) {
  try {
    const docSnapshot = await findUserDoc(props.id);
    const imagesList: string[] =
      docSnapshot.data()[
        props.type === "avatar" ? "recentAvatars" : "recentBackgrounds"
      ];
    const imageUrls: string[] = [];

    for (const name of imagesList) {
      const imageRef = ref(storage, `${props.type}s/${name}`);
      const url = await getDownloadURL(imageRef);
      imageUrls.push(url);
    }
    return imageUrls;
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    return null;
  }
}

export async function getFullUserData(id: string) {
  try {
    const userDoc = await findUserDoc(id);

    if (userDoc.exists) {
      return userDoc.data() as FirestoreUser;
    } else {
      console.error("User document not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user document:", error);
    return null;
  }
}
