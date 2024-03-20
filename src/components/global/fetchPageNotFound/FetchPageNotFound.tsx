"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from "./fetchPageNotFound.module.scss";

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
