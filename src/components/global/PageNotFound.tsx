import Link from "next/link";
import styles from "./pageNotFound.module.scss";

function PageNotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.number}>404</span>
        <p className={styles.text}>
          We couldn&apos;t find the page you were looking for
        </p>
      </h1>
      <Link href="/" className={styles.link}>
        Main Page
      </Link>
    </main>
  );
}

export default PageNotFound;
