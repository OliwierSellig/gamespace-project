"use client";

import Link from "next/link";
import { ActivityItem } from "../../../../../utils/types/types";
import styles from "./activityLogItem.module.scss";
import { useUser } from "../../../../../contexts/UserContext";
import { dateTransform } from "../../../../../utils/functions/functions";

type ActivityLogItemProps = {
  activity: ActivityItem;
};

function ActivityLogItem({ activity }: ActivityLogItemProps) {
  const { transformActivityIntoString } = useUser();
  const activityString = transformActivityIntoString(activity);
  return (
    <li className={styles.container}>
      <div className={styles.date}>{dateTransform(activity.date)}</div>
      <div className={styles.text}>
        {activityString.map((item, i) => (
          <>
            {i !== 0 && <span> </span>}
            {typeof item === "string" ? (
              <span key={crypto.randomUUID()} className={styles.sub}>
                {item}
              </span>
            ) : (
              <Link
                href={item.url}
                key={crypto.randomUUID()}
                className={styles.link}
              >
                {item.name}
              </Link>
            )}
          </>
        ))}
        {"."}
      </div>
    </li>
  );
}

export default ActivityLogItem;
