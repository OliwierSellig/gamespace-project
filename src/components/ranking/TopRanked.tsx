"use client";

import { FetchedGameItem } from "../../utils/types";
import TopRankedCard from "./TopRankedCard";
import styles from "./topRanked.module.scss";

type TopRankedProps = {
  games: FetchedGameItem[];
};

function TopRanked({ games }: TopRankedProps) {
  return (
    <ul className={styles.container}>
      <TopRankedCard game={games[0]} place={1} />
      <TopRankedCard game={games[1]} place={2} />
      <TopRankedCard game={games[2]} place={3} />
    </ul>
  );
}

export default TopRanked;
