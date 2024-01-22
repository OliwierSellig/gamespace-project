"use client";

import { useState } from "react";
import { FetchedGameItem } from "../../utils/types";
import RowItem from "./RowItem";
import styles from "./rowList.module.scss";

type RowListProps = {
  games: FetchedGameItem[];
};

function RowList({ games }: RowListProps) {
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
        />
      ))}
    </ul>
  );
}

export default RowList;
