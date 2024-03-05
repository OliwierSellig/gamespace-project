import { HiMiniPlus } from "react-icons/hi2";
import styles from "./emptyUserSwiperItem.module.scss";
import UserBoxLayout from "../userBoxLayout/userBoxLayout";
import Link from "next/link";

type EmptyUserSwiperItemProps = {
  additionalStyle?: object;
};

function EmptyUserSwiperItem({
  additionalStyle = {},
}: EmptyUserSwiperItemProps) {
  return (
    <UserBoxLayout padding={{ top: 0, bottom: 0, left: 0, right: 0 }}>
      <div style={additionalStyle} className={styles.container}>
        <Link href="/search" aria-label="Add Games" className={styles.btn}>
          <HiMiniPlus />
        </Link>
        <p className={styles.text}>Add Games</p>
      </div>
    </UserBoxLayout>
  );
}

export default EmptyUserSwiperItem;
