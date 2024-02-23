import Link from "next/link";
import { useUser } from "../../../../contexts/UserContext";
import styles from "./gamesStats.module.scss";

function GamesStats({ type, amount }) {
  const { activities } = useUser();

  // -------------------------------------------------
  // Selecting an Activity Type Base on Given Prop
  // -------------------------------------------------

  const curActivities =
    activities[
      type === "played"
        ? "played"
        : type === "review"
        ? "reviewed"
        : "collections"
    ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        <span className={styles.amount}>{amount}</span>
        <Link
          tabIndex={0}
          role="button"
          href={
            type === "played"
              ? "/user/library"
              : type === "review"
              ? "/user/reviews"
              : "/user/collections"
          }
          className={styles.description}
        >
          &nbsp;{type === "played" && "Games Played"}
          {type === "review" && "Reviews"}
          {type === "collections" && "Collections"}
        </Link>
      </h3>
      <div
        className={styles.line}
        style={{
          backgroundColor:
            type === "played"
              ? "#4169e1"
              : type === "review"
              ? "#FFDF00"
              : "#29AB87",
        }}
      ></div>
      <span className={styles.subheading}>Recent Activities:</span>
      <ul className={styles.list}>
        {[...curActivities]
          .reverse()
          .slice(0, 4)
          .map((activity) =>
            !activity?.gameName ? (
              <li className={styles.item} key={crypto.randomUUID()}>
                <span className={styles.item__date}>{activity.date}:</span>
                <span>{` ${activity.act} `}</span>
                <span
                  tabIndex={0}
                  role="button"
                  className={styles.item__name}
                  onClick={() =>
                    navigate(
                      activity?.collectionID
                        ? `/user/collections/${
                            activity.act === "deleted"
                              ? ""
                              : activity.collectionID
                          }`
                        : `/games/${activity.id}`
                    )
                  }
                >
                  {activity.name || activity.collectionName}
                </span>
              </li>
            ) : (
              <li className={styles.item} key={crypto.randomUUID()}>
                <span className={styles.item__date}>{activity.date}:</span>
                <span>{` ${activity.act.split(" ").at(0)} `}</span>
                <span
                  tabIndex={0}
                  role="button"
                  className={styles.item__name}
                  onClick={() => navigate(`/games/${activity.gameID}`)}
                >
                  {activity.gameName}
                </span>
                <span>{` ${activity.act.split(" ").at(1)} `}</span>
                <span
                  tabIndex={0}
                  role="button"
                  className={styles.item__name}
                  onClick={() =>
                    navigate(`/user/collections/${activity.collectionID}`)
                  }
                >
                  {activity.collectionName}
                </span>
              </li>
            )
          )}
        {!curActivities.length && (
          <span className={styles.empty}>No activities yet</span>
        )}
      </ul>
    </div>
  );
}

export default GamesStats;
