import Link from "next/link";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import styles from "./profileOptions.module.scss";

function ProfileOptions() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>My Profile</p>
      <Link
        className={styles.link}
        aria-label="See settings"
        href="/user/settings"
      >
        <HiOutlineAdjustmentsHorizontal />
      </Link>
    </div>
  );
}

export default ProfileOptions;
