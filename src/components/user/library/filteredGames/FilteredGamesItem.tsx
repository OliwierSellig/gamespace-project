import Link from "next/link";
import styles from "./filteredGamesItem.module.scss";
import FilteredGamesSwiper from "./FilteredGamesSwiper";
import { FetchedGameItem } from "../../../../utils/types";

type FilteredGamesItemProps = {
  name: string;
  type: "developer" | "genre" | "platform";
  id: number;
  games: FetchedGameItem[];
};

function FilteredGamesItem({ name, type, id, games }: FilteredGamesItemProps) {
  const gameList = games.map((game) => {
    return { name: game.name, id: game.id, cover: game.background_image };
  });
  return (
    <li className={styles.container}>
      <Link className={styles.heading} href={`/search?${type}=${id}`}>
        <h2>{name}</h2>
      </Link>
      <FilteredGamesSwiper list={gameList} />
    </li>
  );
}

export default FilteredGamesItem;
