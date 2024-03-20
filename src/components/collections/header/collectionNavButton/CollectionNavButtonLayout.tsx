import Link from "next/link";
import { ReactNode } from "react";
import { PaddingType } from "../../../../utils/types/types";
import styles from "./collectionNavButton.module.scss";

type CollectionNavButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
  padding?: PaddingType;
  href?: string;
  label?: string;
};

function CollectionNavButton({
  children,
  handleClick,
  padding = { top: 1.4, left: 3.6, right: 3.6, bottom: 1.4 },
  href = "",
  label = "",
}: CollectionNavButtonProps) {
  const paddingStyle = {
    padding: `${padding.top}rem ${padding.right}rem ${padding.bottom}rem ${padding.left}rem`,
  };
  if (href)
    return (
      <Link
        href={href}
        aria-label={label}
        style={paddingStyle}
        className={styles.btn}
      >
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
