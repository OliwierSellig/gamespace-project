"use client";

import { usePathname } from "next/navigation";
import styles from "./fetchPageNotFound.module.scss";
import Link from "next/link";

function FetchPageNotFound() {
  const pathname = usePathname();
  const current = pathname.split("/").at(-1);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Page not found</h2>
      <p className={styles.text}>
        It seems {current} does not have the page with that index, please go
        back to the first page.
      </p>
      <Link href={pathname} className={styles.link}>
        Go Back
      </Link>
    </div>
  );
}

export default FetchPageNotFound;
