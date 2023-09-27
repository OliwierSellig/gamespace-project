import { Link } from "react-router-dom";
import styles from "./pageNotFound.module.scss";

function PageNotFound() {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.heading}>404</h2>
        <p className={styles.info}>
          We couldn&apos;t find the page you were looking for
        </p>
        <Link to="/" className={styles.link}>
          Main Page
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
