import styles from "./emptyActivities.module.scss";

function EmptyActivities() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        It seems like you didn&apos;t do anything in past 30 days...
      </p>
    </div>
  );
}

export default EmptyActivities;
