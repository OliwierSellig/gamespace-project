"use client";

import Link from "next/link";
import { Fragment } from "react";
import { dateTransform } from "../../../../../utils/functions/functions";
import { ActivityItem } from "../../../../../utils/types/types";
import { useUser } from "../../../../../contexts/UserContext";
import styles from "./activityLogItem.module.scss";

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
          <Fragment key={i}>
            {i !== 0 && <span> </span>}
            {typeof item === "string" ? (
              <span className={styles.sub}>{item}</span>
            ) : (
              <Link
                href={item.url}
                key={crypto.randomUUID()}
                className={styles.link}
              >
                {item.name}
              </Link>
            )}
          </Fragment>
        ))}
        {"."}
      </div>
    </li>
  );
}

export default ActivityLogItem;
