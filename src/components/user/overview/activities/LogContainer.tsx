"use client";

import { useUser } from "../../../../contexts/UserContext";
import ActivityItem from "./ActivityItem";
import FilterLogs from "./FilterLogs";
import styles from "./logContainer.module.scss";

function LogContainer() {
  const { state } = useUser();

  const { activities } = state;
  return (
    <div className={styles.container}>
      <FilterLogs />
      <div className={styles.box}>
        <ul className={styles.list}>
          {activities.map((activity, i) => (
            <ActivityItem key={i} activity={activity} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LogContainer;
