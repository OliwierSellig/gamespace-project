import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function CreateInitialUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// export async function CreateUser(props: {
//   email: string;
//   password: string;
//   username: string;
//   gamespaceName: string;
//   avatar: File | null;
//   background: File | null;
// }) {
//   const res = await createUserWithEmailAndPassword(
//     auth,
//     props.email,
//     props.password,
//   );
//   const user = res.user;
// }
