"use client";

import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import { useUser } from "../../../../../contexts/UserContext";
import styles from "./userAvatar.module.scss";

function UserAvatar() {
  const { currentAvatar } = useUser();
  return (
    <div className={styles.photo}>
      {currentAvatar ? (
        <Image src={currentAvatar} alt="User Avatar" sizes="14rem" fill />
      ) : (
        <HiOutlineUser />
      )}
    </div>
  );
}

export default UserAvatar;
