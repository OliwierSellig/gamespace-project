import { LibraryItemType } from "../../../../../utils/types";
import Pagination from "../../../../global/pagination/Pagination";
import EmptyUserList from "../../../locale/emptyUserList/EmptyUserList";
import FilteredGamesItem from "../filteredGamesItem/FilteredGamesItem";
import styles from "./filteredGamesLibraryList.module.scss";

type FilteredGamesLibraryListProps = {
  list: {
    name: string;
    games: LibraryItemType[];
  }[];
  curPage: number;
  maxPage: number;
};

function FilteredGamesLibraryList({
  list,
  curPage,
  maxPage,
}: FilteredGamesLibraryListProps) {
  if (!list || !list.length)
    return <EmptyUserList>There is nothing matching this query</EmptyUserList>;
  return (
    <>
      <ul className={styles.container}>
        {list.map((item, i) => (
          <FilteredGamesItem key={i} name={item.name} games={item.games} />
        ))}
      </ul>
      <Pagination
        padding={{ top: 3.6, left: 0, right: 0, bottom: 3.6 }}
        currentPage={curPage}
        maxPage={maxPage}
      />
    </>
  );
}

export default FilteredGamesLibraryList;
