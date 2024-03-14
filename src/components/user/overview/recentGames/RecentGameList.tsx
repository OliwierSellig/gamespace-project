"use client";

import { useUser } from "../../../../contexts/UserContext";
import EmptyRecentGamesList from "./EmptyRecentGamesList";
import RecentGameItem from "./RecentGameItem";
import styles from "./recentGameList.module.scss";

function RecentGameList() {
  const { recentAddedGames } = useUser();

  if (!recentAddedGames.length) return <EmptyRecentGamesList />;

  return (
    <ul className={styles.container}>
      {recentAddedGames.map((game) => (
        <RecentGameItem key={game.id} game={game} />
      ))}
    </ul>
  );
}

export default RecentGameList;
