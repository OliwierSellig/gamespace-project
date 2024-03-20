import Link from "next/link";
import { HiMiniPlus } from "react-icons/hi2";
import UserBoxLayout from "../../../locale/userBoxLayout/userBoxLayout";
import styles from "./emptyGameCard.module.scss";

function EmptyGameCard() {
  return (
    <UserBoxLayout
      additionalStyles={{
        borderRadius: "9px",
        minHeight: "12rem",
        aspectRatio: "16/10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      padding={{ top: 1.2, left: 1.2, right: 1.2, bottom: 1.2 }}
    >
      <Link href="/search" className={styles.link}>
        <HiMiniPlus />
      </Link>
    </UserBoxLayout>
  );
}

export default EmptyGameCard;
