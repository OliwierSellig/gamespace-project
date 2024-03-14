import { HiOutlineCheckCircle } from "react-icons/hi2";
import styles from "./collectionsNameListItem.module.scss";
import { ReactNode } from "react";

type CollectionsNameListItemProps = {
  children: ReactNode;
  isActive: boolean;
};

function CollectionsNameListItem({
  children,
  isActive,
}: CollectionsNameListItemProps) {
  return (
    <li>
      <button className={`${styles.btn} ${isActive ? styles.btn__active : ""}`}>
        <span className={styles.btn__name}>{children}</span>
        <HiOutlineCheckCircle />
      </button>
    </li>
  );
}

export default CollectionsNameListItem;
