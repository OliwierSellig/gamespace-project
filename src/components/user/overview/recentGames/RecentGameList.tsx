import { fetchGames } from "../../../../lib/games";
import RecentGameItem from "./RecentGameItem";
import styles from "./recentGameList.module.scss";

async function RecentGameList() {
  const games = await fetchGames({
    dates: {
      fromDay: 1,
      fromMonth: 1,
      fromYear: 2018,
      toDay: 30,
      toMonth: 12,
      toYear: 2018,
    },
  });

  return (
    <ul className={styles.container}>
      {games.results.slice(0, 9).map((game) => (
        <RecentGameItem
          id={game.id}
          cover={game.background_image}
          added={game.added}
          name={game.name}
          key={game.id}
        />
      ))}
    </ul>
  );
}

export default RecentGameList;
