"use client";

import { useLibrary } from "../../../../../contexts/libraryContext/LibraryContext";
import EmptyRecentGamesList from "../emptyRecentGames/EmptyRecentGamesList";
import RecentGameItem from "../recentGameItem/RecentGameItem";
import styles from "./recentGameList.module.scss";

function RecentGameList() {
  const { getRecentAddedGames } = useLibrary();
  const recentGames = getRecentAddedGames();
  if (!recentGames.length) return <EmptyRecentGamesList />;

  return (
    <ul className={styles.container}>
      {recentGames.map((game) => (
        <RecentGameItem key={game.id} game={game} />
      ))}
    </ul>
  );
}

export default RecentGameList;
