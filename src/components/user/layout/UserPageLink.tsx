import Link from "next/link";
import styles from "./userPageLink.module.scss";
import { ReactNode } from "react";

type UserPageLinkProps = {
  href: string;
  isActive: boolean;
  children: ReactNode;
};

function UserPageLink({ href, isActive, children }: UserPageLinkProps) {
  return (
    <Link
      href={`/user/${href || ""}`}
      className={`${styles.link} ${isActive ? styles.link__active : ""}`}
    >
      {children}
    </Link>
  );
}

export default UserPageLink;
