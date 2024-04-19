import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";
import user from "../../../../../../public/img/user.webp";
import { useAuth } from "../../../../../contexts/AuthContext";
import HeaderLink from "../headerLink/HeaderLink";
import styles from "./goToUserProfile.module.scss";

function GoToUserProfile() {
  const { isUserLoggedIn } = useAuth();
  if (!isUserLoggedIn)
    return (
      <HeaderLink label="Go to login" href="/login">
        <HiOutlineUser />
      </HeaderLink>
    );
  return (
    <Link
      className={styles.link}
      href="/user/overview"
      aria-label="Go to user overview"
    >
      <Image fill src={user} alt="User Avatar" sizes="46px" />
      <div className={styles.link__box}>
        <HiOutlineUser />
      </div>
    </Link>
  );
}

export default GoToUserProfile;
