"use client";

import { useUserData } from "../../../../../hooks/useUserData";
import { useAuth } from "../../../../../contexts/AuthContext";
import styles from "./userName.module.scss";

function UserName() {
  const { currentUser } = useAuth();
  const { data } = useUserData(currentUser.uid, "name");

  return <p className={styles.name}>{data || "John Sanderson"}</p>;
}

export default UserName;
