import { HiMiniPlus } from "react-icons/hi2";
import styles from "./emptyYearItem.module.scss";
import UserBoxLayout from "../../locale/userBoxLayout/userBoxLayout";
import Link from "next/link";

function EmptyYearItem() {
  return (
    <UserBoxLayout padding={{ top: 3.2, bottom: 3.2, left: 2.4, right: 2.4 }}>
      <div className={styles.container}>
        <Link href="/search" aria-label="Add Games" className={styles.btn}>
          <HiMiniPlus />
        </Link>
        <p className={styles.text}>Add Games</p>
      </div>
    </UserBoxLayout>
  );
}

export default EmptyYearItem;
