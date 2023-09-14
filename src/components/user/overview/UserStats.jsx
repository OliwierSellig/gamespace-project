import styles from "./userStats.module.scss";

function UserStats({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default UserStats;
