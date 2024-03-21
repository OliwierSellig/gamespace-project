"use client";

import { useUser } from "../../../../../contexts/UserContext";
import UserBoxLayout from "../../../locale/userBoxLayout/userBoxLayout";
import UserStatsItem from "../userStatsItem/UserStatsItem";
import styles from "./userStats.module.scss";

function UserStats() {
  const { state } = useUser();

  const userStatsItems = [
    { name: "Games Played", count: state.library.length, color: "#4169E1" },
    { name: "Wishlisted", count: state.wishlist.length, color: "#FFDF00" },
    { name: "Collections", count: state.collections.length, color: "#29AB87" },
  ];

  return (
    <UserBoxLayout padding={{ top: 3.2, left: 4.8, right: 4.8, bottom: 3.2 }}>
      <ul className={styles.container}>
        {userStatsItems.map((item, i) => (
          <>
            {i !== 0 && <li className={styles.line} />}
            <UserStatsItem
              key={item.name}
              name={item.name}
              count={item.count}
              color={item.color}
            />
          </>
        ))}
      </ul>
    </UserBoxLayout>
  );
}

export default UserStats;
