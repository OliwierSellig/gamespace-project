import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as Yup from "yup";
import { auth, firestore, storage } from "./firebase";

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

  const col = collection(firestore, "users");

  const url = { avatar: "", background: "" };

  if (props.avatar) {
    const backgroundRef = ref(
      storage,
      `backgrounds/${user.uid}-${Math.ceil(Math.random() * 1000)}`,
    );

    await uploadBytes(backgroundRef, props.background);

    url.background = await getDownloadURL(backgroundRef);

    if (props.avatar) {
      const avatarRef = ref(
        storage,
        `avatars/${user.uid}-${Math.ceil(Math.random() * 1000)}`,
      );

      await uploadBytes(avatarRef, props.avatar);

      url.avatar = await getDownloadURL(avatarRef);
    }
  }

  const docRef = doc(col, user.uid);
  const filledDoc = await setDoc(docRef, {
    email: props.email,
    gamespaceName: props.gamespaceName,
    avatar: url.avatar,
    background: url.background,
  });

  return filledDoc;
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

// export async function validateEmail(email: string) {
//   try {
//     const q = query(
//       collection(firestore, "users"),
//       where("email", "==", email),
//     );
//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//       return "Email is already taken";
//     }
//     return "";
//   } catch (error) {
//     console.log(error);
//   }
// }

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
