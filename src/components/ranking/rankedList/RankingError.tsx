import Link from "next/link";
import styles from "./rankingError.module.scss";

function RankingError() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Sorry, we have not been able to fetched the games...
      </p>
      <Link href="/" className={styles.link}>
        Back to Homepage
      </Link>
    </div>
  );
}

export default RankingError;
