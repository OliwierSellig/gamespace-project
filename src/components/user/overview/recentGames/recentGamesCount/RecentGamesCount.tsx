import { HiOutlineCheckCircle } from "react-icons/hi2";
import styles from "./recentGamesCount.module.scss";

type RecentGamesCountProps = {
  count: number;
};

function RecentGamesCount({ count }: RecentGamesCountProps) {
  return (
    <div className={styles.container}>
      <span>{count}</span>
      <HiOutlineCheckCircle />
    </div>
  );
}

export default RecentGamesCount;
