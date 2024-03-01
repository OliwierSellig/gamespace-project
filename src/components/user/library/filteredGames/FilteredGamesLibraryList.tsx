import { FetchedGameItem } from "../../../../utils/types";
import Pagination from "../../../global/Pagination";
import UserLibrarySwiper from "./FilteredGamesItem";
import styles from "./filteredGamesLibraryList.module.scss";

type FilteredGamesLibraryList = {
  list: FetchedGameItem[];
  count: number;
  page: string;
};

const RESULTS_PER_PAGE = 4;

function FilteredGamesLibraryList({
  list,
  page,
  count,
}: FilteredGamesLibraryList) {
  return (
    <>
      <ul className={styles.container}>
        {list.slice(0, RESULTS_PER_PAGE).map((item, i) => (
          <UserLibrarySwiper
            key={i}
            type="developer"
            id={320}
            name="Ubisoft Montreal"
            games={list}
          />
        ))}
      </ul>
      <Pagination
        padding={{ top: 3.6, left: 0, right: 0, bottom: 3.6 }}
        currentPage={parseInt(page)}
        maxPage={Math.ceil(count / RESULTS_PER_PAGE)}
      />
    </>
  );
}

export default FilteredGamesLibraryList;
