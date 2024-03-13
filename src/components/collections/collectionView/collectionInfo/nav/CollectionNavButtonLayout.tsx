import { ReactNode } from "react";
import styles from "./collectionNavButton.module.scss";
import { PaddingType } from "../../../../../utils/types";
import Link from "next/link";

type CollectionNavButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
  padding?: PaddingType;
  href?: string;
};

function CollectionNavButton({
  children,
  handleClick,
  padding = { top: 1.4, left: 3.6, right: 3.6, bottom: 1.4 },
  href = "",
}: CollectionNavButtonProps) {
  const paddingStyle = {
    padding: `${padding.top}rem ${padding.right}rem ${padding.bottom}rem ${padding.left}rem`,
  };
  if (href)
    return (
      <Link href={href} style={paddingStyle} className={styles.btn}>
        {children}
      </Link>
    );
  return (
    <button
      style={paddingStyle}
      onClick={() => handleClick?.()}
      className={styles.btn}
    >
      {children}
    </button>
  );
}

export default CollectionNavButton;
