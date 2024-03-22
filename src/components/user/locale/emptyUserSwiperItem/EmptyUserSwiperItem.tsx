import Link from "next/link";
import { HiMiniPlus } from "react-icons/hi2";
import UserBoxLayout from "../userBoxLayout/userBoxLayout";
import styles from "./emptyUserSwiperItem.module.scss";

type EmptyUserSwiperItemProps = {
  additionalStyle?: object;
  text?: string;
};

function EmptyUserSwiperItem({
  additionalStyle = {},
  text = "Add Games",
}: EmptyUserSwiperItemProps) {
  return (
    <UserBoxLayout
      additionalStyles={{ height: "100%" }}
      padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <div style={additionalStyle} className={styles.container}>
        <Link href="/search" aria-label={text} className={styles.btn}>
          <HiMiniPlus />
        </Link>
        <p className={styles.text}>{text}</p>
      </div>
    </UserBoxLayout>
  );
}

export default EmptyUserSwiperItem;
