import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import * as Yup from "yup";
import { auth, firestore } from "./firebase";
import { setNewImage } from "./userData";
import { getUserDocRef, urlToName } from "./utils";

export async function CreateInitialUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function CreateUser(props: {
  email: string;
  password: string;
  gamespaceName: string;
  avatar: File | null;
  background: File | null;
}) {
  const res = await createUserWithEmailAndPassword(
    auth,
    props.email,
    props.password,
  );
  const user = res.user;

  const docRef = getUserDocRef(user.uid);

  const backgroudnURL = props.background
    ? await setNewImage(user.uid, "background", props.background, true)
    : "";
  const avatarURL = props.avatar
    ? await setNewImage(user.uid, "avatar", props.avatar, true)
    : "";

  await setDoc(docRef, {
    email: props.email,
    gamespaceName: props.gamespaceName,
    avatar: avatarURL,
    background: backgroudnURL,
    createdAt: user.metadata.creationTime,
    recentAvatars: [urlToName({ type: "avatar", url: avatarURL })],
    recentBackgrounds: [urlToName({ type: "background", url: backgroudnURL })],
  });

  return {
    name: props.gamespaceName,
    avatar: avatarURL,
    background: backgroudnURL,
    createdAt: user.metadata.creationTime,
    id: user.uid,
  };
}

export async function userLogout() {
  await signOut(auth);
}

export async function userLogin(credentials: {
  email: string;
  password: string;
}) {
  try {
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password,
    );
    return false;
  } catch (error) {
    return true;
  }
}

export async function validateEmail(
  email: string,
  loadingFn: (isLoading: boolean) => void,
) {
  try {
    loadingFn(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 200);
    });

    const schema = Yup.string()
      .email("Invalid email address")
      .required("Email is required");

    await schema.validate(email);

    const q = query(
      collection(firestore, "users"),
      where("email", "==", email),
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return "Email is already taken";
    }

    return "";
  } catch (error) {
    return error.message;
  } finally {
    loadingFn(false);
  }
}
