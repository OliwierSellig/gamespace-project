"use client";

import { useFirebaseUser } from "../../../../../contexts/FirebaseUserContext";
import styles from "./userName.module.scss";

function UserName() {
  const { state } = useFirebaseUser();
  const name = state.profileSettings.name;

  return <p className={styles.name}>{name || "Undefined User"}</p>;
}

export default UserName;
