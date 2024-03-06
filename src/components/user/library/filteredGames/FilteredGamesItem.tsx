import styles from "./filteredGamesItem.module.scss";
import FilteredGamesSwiper from "./FilteredGamesSwiper";
import { LibraryItemType } from "../../../../utils/types";

type FilteredGamesItemProps = {
  name: string;
  games: LibraryItemType[];
};

function FilteredGamesItem({ name, games }: FilteredGamesItemProps) {
  return (
    <li className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <FilteredGamesSwiper list={games} />
    </li>
  );
}

export default FilteredGamesItem;
