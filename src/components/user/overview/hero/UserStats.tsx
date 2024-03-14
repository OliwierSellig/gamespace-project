"use client";

import { useUser } from "../../../../contexts/UserContext";
import UserStatsItem from "./UserStatsItem";
import styles from "./userStats.module.scss";

function UserStats() {
  const { state } = useUser();

  const userStatsItems = [
    { name: "Games Played", count: state.library.length, color: "#4169E1" },
    { name: "Wishlisted", count: state.wishlist.length, color: "#FFDF00" },
    { name: "Collections", count: state.collections.length, color: "#29AB87" },
  ];

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
