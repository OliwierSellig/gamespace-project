import Link from "next/link";
import styles from "./logo.module.scss";

type LogoProps = { pos?: "header" | "footer" };

function Logo({ pos = "header" }: LogoProps) {
  return (
    <Link
      className={`${styles.logo} ${
        pos === "footer" ? styles.logo__footer : ""
      }`}
      href="/"
    >
      <span>Game</span>
      <span className={styles.space}>Space</span>
    </Link>
  );
}

export default Logo;
