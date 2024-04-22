"use client";

import { dateTransform } from "../../../../../utils/functions/functions";
import { useFirebaseUser } from "../../../../../contexts/FirebaseUserContext";
import styles from "./createdAt.module.scss";

function CreatedAt() {
  const { state } = useFirebaseUser();
  const createdAt = state.profileSettings.createdAt;
  return (
    <p
      className={styles.since}
    >{`On GameSpace since ${dateTransform(createdAt)}`}</p>
  );
}

export default CreatedAt;
