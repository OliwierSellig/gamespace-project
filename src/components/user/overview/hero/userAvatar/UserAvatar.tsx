"use client";

import Image from "next/image";
import userPhoto from "../../../../../../public/img/user.webp";
import { useFirebaseUser } from "../../../../../contexts/FirebaseUserContext";
import styles from "./userAvatar.module.scss";

function UserAvatar() {
  const { state } = useFirebaseUser();
  const avatar = state.profileSettings.avatar;
  return (
    <div className={styles.photo}>
      <Image src={avatar || userPhoto} alt="User Photo" sizes="14rem" fill />
    </div>
  );
}

export default UserAvatar;
