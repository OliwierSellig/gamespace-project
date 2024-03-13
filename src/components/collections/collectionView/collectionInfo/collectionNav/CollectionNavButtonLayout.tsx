import { ReactNode } from "react";
import styles from "./collectionNavButton.module.scss";
import { PaddingType } from "../../../../../utils/types";

type CollectionNavButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
  padding?: PaddingType;
};

function CollectionNavButton({
  children,
  handleClick,
  padding = { top: 1.4, left: 3.6, right: 3.6, bottom: 1.4 },
}: CollectionNavButtonProps) {
  return (
    <button
      style={{
        padding: `${padding.top}rem ${padding.right}rem ${padding.bottom}rem ${padding.left}rem`,
      }}
      onClick={() => handleClick?.()}
      className={styles.btn}
    >
      {children}
    </button>
  );
}

export default CollectionNavButton;
