import Link from "next/link";
import UserBoxLayout from "../../locale/userBoxLayout/userBoxLayout";
import styles from "./startCollectionButton.module.scss";
import { HiMiniPlus } from "react-icons/hi2";

function StartCollectionButton() {
  return (
    <UserBoxLayout padding={{ top: 1.8, bottom: 1.8, left: 3.6, right: 3.6 }}>
      <Link className={styles.btn} href="/user/create-collection">
        <span>
          <span className={styles.btn__start}>Start a </span>
          <span className={styles.btn__collection}>New Collection</span>
        </span>
        <HiMiniPlus />
      </Link>
    </UserBoxLayout>
  );
}

export default StartCollectionButton;
