"use client";

import Link from "next/link";
import styles from "./browseBy.module.scss";
import { useBrowse } from "../../contexts/BrowseContext";

function BrowseBy() {
  const { currentPath } = useBrowse();

  return (
    <div className={styles.container}>
      <p className={styles.browse}>Browse By:</p>
      <nav className={styles.row}>
        <Link
          href="/browse/genres"
          className={`${styles.link} ${
            currentPath === "genres" ? styles.link__active : ""
          }`}
        >
          Genres
        </Link>
        <Link
          href="/browse/developers"
          className={`${styles.link}  ${
            currentPath === "developers" ? styles.link__active : ""
          }`}
        >
          Developers
        </Link>
        <Link
          href="/browse/platforms"
          className={`${styles.link} ${
            currentPath === "platforms" ? styles.link__active : ""
          }`}
        >
          Platforms
        </Link>
        <div
          className={`${styles.line} ${
            styles[
              `line__${
                currentPath === "genres"
                  ? 1
                  : currentPath === "developers"
                  ? 2
                  : 3
              }`
            ]
          }`}
        />
      </nav>
    </div>
  );
}

export default BrowseBy;
