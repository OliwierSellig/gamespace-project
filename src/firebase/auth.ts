import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
