import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineUser,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { useUser } from "../../../../../contexts/userContext/UserContext";
import HeaderLink from "../headerLink/HeaderLink";
import styles from "./goToUserProfile.module.scss";

function GoToUserProfile() {
  const { isLoggedIn, currentAvatar } = useUser();

  if (!isLoggedIn)
    return (
      <HeaderLink label="Go to login" href="/login">
        <HiOutlineUserPlus />
      </HeaderLink>
    );

  return (
    <Link
      className={styles.link}
      href="/user/overview"
      aria-label="Go to user overview"
    >
      {currentAvatar ? (
        <Image fill src={currentAvatar} alt="User Avatar" sizes="46px" />
      ) : (
        <HiOutlineArrowLeftOnRectangle />
      )}
      <div className={styles.link__box}>
        <HiOutlineUser />
      </div>
    </Link>
  );
}

export default GoToUserProfile;
