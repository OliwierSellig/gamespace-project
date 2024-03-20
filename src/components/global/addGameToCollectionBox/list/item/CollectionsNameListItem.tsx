import { ReactNode } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import styles from "./collectionsNameListItem.module.scss";

type CollectionsNameListItemProps = {
  children: ReactNode;
  isActive: boolean;
  handleClick: () => void;
};

function CollectionsNameListItem({
  children,
  isActive,
  handleClick,
}: CollectionsNameListItemProps) {
  return (
    <li>
      <button
        onClick={() => handleClick?.()}
        className={`${styles.btn} ${isActive ? styles.btn__active : ""}`}
      >
        <span className={styles.btn__name}>{children}</span>
        <HiOutlineCheckCircle />
      </button>
    </li>
  );
}

export default CollectionsNameListItem;
