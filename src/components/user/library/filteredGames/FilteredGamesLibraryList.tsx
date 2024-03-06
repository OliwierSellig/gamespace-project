import { useUser } from "../../../../contexts/UserContext";
import Pagination from "../../../global/Pagination";
import FilteredGamesItem from "./FilteredGamesItem";
import styles from "./filteredGamesLibraryList.module.scss";

type FilteredGamesLibraryList = {
  page: string;
  query: string;
  resultsPerPage?: number;
  filterBy: string;
};

function FilteredGamesLibraryList({
  page,
  filterBy,
  query,
  resultsPerPage = 4,
}: FilteredGamesLibraryList) {
  const { filterLibraryBy } = useUser();
  console.log(filterBy);
  const list = filterLibraryBy(filterBy);
  const maxPage = Math.ceil(list.length / resultsPerPage);
  const curPage =
    page && parseInt(page) > 0 && parseInt(page) <= maxPage
      ? parseInt(page)
      : 1;

  console.log(list);

  return (
    <>
      <ul className={styles.container}>
        {list
          .slice((curPage - 1) * resultsPerPage, curPage * resultsPerPage)
          .map((item, i) => (
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
