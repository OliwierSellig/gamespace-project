import Link from "next/link";
import styles from "./browseBy.module.scss";

function BrowseBy() {
  return (
    <div className={styles.container}>
      <p className={styles.browse}>Browse By:</p>
      <nav className={styles.row}>
        <Link href="/browse/genres" className={`${styles.link}`}>
          Genres
        </Link>
        <Link
          href="/browse/developers"
          className={`${styles.link}  ${styles.link__active}`}
        >
          Developers
        </Link>
        <Link href="/browse/platforms" className={`${styles.link}`}>
          Platforms
        </Link>
        <div className={`${styles.line} ${styles.line__2}`} />
      </nav>
    </div>
  );
}

export default BrowseBy;
