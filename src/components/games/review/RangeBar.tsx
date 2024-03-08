import styles from "./rangeBar.module.scss";

function RangeBar() {
  return (
    <div className={styles.container}>
      <div className={styles.bar} />
      <span className={styles.number}>4.4/5</span>
    </div>
  );
}

export default RangeBar;
