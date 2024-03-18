import { ActivityItem } from "../../../../../utils/types";
import ActivityLogItem from "../activityLogItem/ActivityLogItem";
import EmptyActivities from "../emptyActivities/EmptyActivities";
import styles from "./activitiesList.module.scss";

type ActivitiesListProps = {
  list: ActivityItem[];
};

function ActivitiesList({ list }: ActivitiesListProps) {
  if (!list || !list.length) return <EmptyActivities />;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ul className={styles.list}>
          {list.map((activity, i) => (
            <ActivityLogItem key={i} activity={activity} />
          ))}
        </ul>
        <p className={styles.text}>Your activites in past month...</p>
      </div>
    </div>
  );
}

export default ActivitiesList;
