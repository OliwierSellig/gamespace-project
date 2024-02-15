"use client";

import { usePathname } from "next/navigation";
import styles from "./fetchPageNotFound.module.scss";
import Link from "next/link";
import { ReactNode } from "react";

type FetchPageNotFoundProps = {
  children?: ReactNode;
};

function FetchPageNotFound({ children }: FetchPageNotFoundProps) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Page not found</h2>
      <p className={styles.text}>
        {children ||
          "It seems we do not have page with that index, please go back to the first page."}
      </p>
      <Link href={pathname} className={styles.link}>
        Go Back
      </Link>
    </div>
  );
}

export default FetchPageNotFound;
