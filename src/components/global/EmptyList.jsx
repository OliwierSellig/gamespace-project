import Link from "next/link";
import styles from "./emptyList.module.scss";

function EmptyList({
  btnText = "Search for games",
  navigateTo = "/",
  children,
}) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{children}</p>
      <Link className={styles.btn} href={navigateTo}>
        <span className={styles.btn__text}>{btnText}</span>
        <img
          className={styles.btn__icon}
          src="/svg/look.svg"
          alt="Go to search"
        />
      </Link>
    </div>
  );
}

export default EmptyList;
