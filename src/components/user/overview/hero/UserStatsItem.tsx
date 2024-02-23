import styles from "./userStatsItem.module.scss";

type UserStatsItemsProps = {
  name: string;
  count: number;
  color: string;
};

function UserStatsItem({ name, count, color }: UserStatsItemsProps) {
  return (
    <li className={styles.container}>
      <p className={styles.name}>{name}</p>
      <span className={styles.count}>{count}</span>
      <div style={{ backgroundColor: color }} className={styles.line} />
    </li>
  );
}

export default UserStatsItem;
