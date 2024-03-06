import styles from "./filteredGamesItem.module.scss";
import FilteredGamesSwiper from "./FilteredGamesSwiper";
import { LibraryItemType } from "../../../../utils/types";

type FilteredGamesItemProps = {
  name: string;
  games: LibraryItemType[];
};

function FilteredGamesItem({ name, games }: FilteredGamesItemProps) {
  const gameList = games.map((game) => {
    return { name: game.name, id: game.id, cover: game.cover };
  });
  return (
    <li className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <FilteredGamesSwiper list={gameList} />
    </li>
  );
}

export default FilteredGamesItem;
