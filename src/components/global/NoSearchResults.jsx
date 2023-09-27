import styles from "./noSearchResults.module.scss";

function NoSearchResults() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        We couldn&apos;t find what you were looking for.
      </p>
      <img className={styles.icon} src="/svg/sad.svg" alt="Sad face" />
    </div>
  );
}

export default NoSearchResults;
