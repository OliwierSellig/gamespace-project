import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";
import user from "../../../../../../public/img/user.webp";
import HeaderLink from "../headerLink/HeaderLink";
import styles from "./goToUserProfile.module.scss";

const isLogged = true;

function GoToUserProfile() {
  if (isLogged)
    return (
      <HeaderLink label="Go to user overview" href="/login">
        <HiOutlineUser />
      </HeaderLink>
    );
  return (
    <Link
      className={styles.link}
      href="/user/overview"
      aria-label="Go to login"
    >
      <Image fill src={user} alt="User Avatar" sizes="46px" />
      <div className={styles.link__box}>
        <HiOutlineUser />
      </div>
    </Link>
  );
}

export default GoToUserProfile;
