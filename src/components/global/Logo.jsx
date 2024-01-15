import styles from "./logo.module.scss";
import Link from "next/link";

function Logo({ additionalClass }) {
  return (
    <Link
      className={`${styles.logo} ${
        additionalClass ? styles[additionalClass] : ""
      }`}
      href="/"
    >
      <span>Game</span>
      <span className={styles.space}>Space</span>
    </Link>
  );
}

export default Logo;
