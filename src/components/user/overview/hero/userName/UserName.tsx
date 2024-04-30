"use client";

import { useUser } from "../../../../../contexts/UserContext";
import styles from "./userName.module.scss";

function UserName() {
  const { state } = useUser();
  const name = state.profileSettings.name;

  return <p className={styles.name}>{name || "Undefined User"}</p>;
}

export default UserName;
