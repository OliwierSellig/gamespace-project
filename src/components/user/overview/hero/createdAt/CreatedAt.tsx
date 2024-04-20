"use client";

import { dateTransform } from "../../../../../utils/functions/functions";
import { useUserData } from "../../../../../hooks/useUserData";
import { useAuth } from "../../../../../contexts/AuthContext";
import styles from "./createdAt.module.scss";

function CreatedAt() {
  const { currentUser } = useAuth();
  const { data } = useUserData(currentUser.uid, "createdAt");
  return (
    <p
      className={styles.since}
    >{`On GameSpace since ${dateTransform(data)}`}</p>
  );
}

export default CreatedAt;
