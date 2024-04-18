import Link from "next/link";
import { ReactNode } from "react";
import styles from "./headerLink.module.scss";

type HeaderLinkProps = {
  href?: string;
  children: ReactNode;
  label: string;
  handleClick?: () => void;
};

function HeaderLink({
  href = "",
  children,
  label,
  handleClick,
}: HeaderLinkProps) {
  if (handleClick)
    return (
      <button aria-label={label} className={styles.link} onClick={handleClick}>
        {children}
      </button>
    );
  return (
    <Link aria-label={label} className={styles.link} href={href}>
      {children}
    </Link>
  );
}

export default HeaderLink;
