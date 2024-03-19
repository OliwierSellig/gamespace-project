"use client";

import { useState } from "react";
import { FetchedGameItem } from "../../../../utils/types/types";
import RowItem from "./rowItem/RowItem";
import styles from "./rowList.module.scss";

type RowListProps = {
  games: FetchedGameItem[];
  order: string;
};

function RowList({ games, order }: RowListProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul className={styles.container}>
      {games.map((game, i) => (
        <RowItem
          isActive={active === i}
          setActive={() => setActive(i)}
          unSetActive={() => setActive(null)}
          key={game.id}
          game={game}
          index={i}
          fadeSide={i % 2 === 0 ? "left" : "right"}
          highlight={
            order === "trending"
              ? `${game.added} played`
              : `${game.rating} rating`
          }
        />
      ))}
    </ul>
  );
}

export default RowList;
