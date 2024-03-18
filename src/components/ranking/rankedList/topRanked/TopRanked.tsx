"use client";

import { FetchedGameItem } from "../../../../utils/types";
import TopRankedCard from "./topRankedCard/TopRankedCard";
import styles from "./topRanked.module.scss";

type TopRankedProps = {
  games: FetchedGameItem[];
  order: string;
};

function TopRanked({ games, order }: TopRankedProps) {
  return (
    <ul className={styles.container}>
      {games.map((game, i) => (
        <TopRankedCard
          order={order}
          key={game.id}
          game={game}
          place={i + 1}
          animTime={i}
        />
      ))}
    </ul>
  );
}

export default TopRanked;
