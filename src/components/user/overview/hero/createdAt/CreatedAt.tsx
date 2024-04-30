"use client";

import { dateTransform } from "../../../../../utils/functions/functions";
import { useUser } from "../../../../../contexts/UserContext";
import styles from "./createdAt.module.scss";

function CreatedAt() {
  const { state } = useUser();
  const createdAt = state.profileSettings.createdAt;
  return (
    <p
      className={styles.since}
    >{`On GameSpace since ${dateTransform(createdAt)}`}</p>
  );
}

export default CreatedAt;
