import { ReactNode, useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import styles from "./collectionsNameListItem.module.scss";

type CollectionsNameListItemProps = {
  children: ReactNode;
  isActive: boolean;
  handleClick: () => Promise<void>;
};

function CollectionsNameListItem({
  children,
  isActive,
  handleClick,
}: CollectionsNameListItemProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleButtonClick() {
    setIsLoading(true);
    try {
      await handleClick?.();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <li>
      <button
        onClick={handleButtonClick}
        className={`${styles.btn} ${isActive ? styles.btn__active : ""} ${isLoading ? styles.btn__loading : ""}`}
      >
        <span className={styles.btn__name}>{children}</span>
        <HiOutlineCheckCircle />
      </button>
    </li>
  );
}

export default CollectionsNameListItem;
