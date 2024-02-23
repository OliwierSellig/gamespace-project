import Link from "next/link";
import { LogItemType } from "../../../../utils/types";
import styles from "./logItem.module.scss";

type LogItemProps = {
  log: LogItemType;
};

function LogItem({ log }: LogItemProps) {
  return (
    <li className={styles.container}>
      <div className={styles.date}>{log.date}</div>
      <div className={styles.text}>
        {log.actions.map((action, i) => (
          <>
            {i !== 0 ? " " : ""}
            <span className={styles.sub}>{action.sub} </span>
            <Link href={action.link.href} className={styles.link}>
              {action.link.name}
            </Link>
          </>
        ))}
      </div>
    </li>
  );
}

export default LogItem;
