"use client";

import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import { useFirebaseUser } from "../../../../../contexts/FirebaseUserContext";
import styles from "./userAvatar.module.scss";

function UserAvatar() {
  const { state } = useFirebaseUser();
  const avatar = state.profileSettings.recentAvatars.at(0);
  return (
    <div className={styles.photo}>
      {avatar ? (
        <Image src={avatar} alt="User Avatar" sizes="14rem" fill />
      ) : (
        <HiOutlineUser />
      )}
    </div>
  );
}

export default UserAvatar;
