import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

async function findUserCol(id: string) {
  const col = collection(firestore, "users");
  const document = doc(col, id);

  return await getDoc(document);
}

export async function getUserBackground(id: string): Promise<string | null> {
  try {
    const docSnapshot = await findUserCol(id);

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
    const docSnapshot = await findUserCol(id);

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
    const docSnapshot = await findUserCol(id);

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
    const docSnapshot = await findUserCol(id);

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
