import { HiEllipsisHorizontal } from "react-icons/hi2";

import styles from "./recentGamesOptions.module.scss";

function RecentGamesOptions() {
  return (
    <button className={styles.btn} aria-label="Open Options">
      <HiEllipsisHorizontal />
    </button>
  );
}

export default RecentGamesOptions;
