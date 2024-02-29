import { FetchedGameItem } from "../../../../utils/types";
import Pagination from "../../../global/Pagination";
import GameLibraryItem from "../../locale/gameLibraryItem/GameLibraryItem";
import styles from "./allGamesLibraryList.module.scss";

type AllGamesLibraryList = {
  list: FetchedGameItem[];
  count: number;
  orderBy: string;
  page: string;
};

const RESULTS_PER_PAGE = 12;

function AllGamesLibraryList({
  list,
  count,
  orderBy,
  page,
}: AllGamesLibraryList) {
  return (
    <>
      <ul className={styles.container}>
        {list.map((item) => (
          <GameLibraryItem key={item.id} />
        ))}
      </ul>
      <Pagination
        currentPage={parseInt(page)}
        maxPage={Math.ceil(count / RESULTS_PER_PAGE)}
      />
    </>
  );
}

export default AllGamesLibraryList;
