"use client";

import Image from "next/image";
import { useUserData } from "../../../../../hooks/useUserData";
import userPhoto from "../../../../../../public/img/user.webp";
import { useAuth } from "../../../../../contexts/AuthContext";
import styles from "./userAvatar.module.scss";

function UserAvatar() {
  const { currentUser } = useAuth();
  const { data } = useUserData(currentUser.uid, "avatar");
  return (
    <div className={styles.photo}>
      <Image src={data || userPhoto} alt="User Photo" sizes="14rem" fill />
    </div>
  );
}

export default UserAvatar;
