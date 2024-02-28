import UserStatsItem from "./UserStatsItem";
import styles from "./userStats.module.scss";

const userStatsItems = [
  { name: "Games Played", count: 27, color: "#4169E1" },
  { name: "Wishlisted", count: 12, color: "#FFDF00" },
  { name: "Collections", count: 9, color: "#29AB87" },
];

function UserStats() {
  return (
    <ul className={styles.container}>
      {userStatsItems.map((item, i) =>
        i === 0 ? (
          <UserStatsItem
            key={item.name}
            name={item.name}
            count={item.count}
            color={item.color}
          />
        ) : (
          <>
            <li className={styles.line} />
            <UserStatsItem
              key={item.name}
              name={item.name}
              count={item.count}
              color={item.color}
            />
          </>
        )
      )}
    </ul>
  );
}

export default UserStats;
