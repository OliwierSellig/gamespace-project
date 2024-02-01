import { fetchedParentResult } from "../../utils/types";
import Pagination from "../global/Pagination";
import BrowseItem from "./BrowseItem";
import styles from "./browseList.module.scss";
import FetchPageNotFound from "./FetchPageNotFound";

type BrowseListProps = {
  list: fetchedParentResult[];
  count: number;
  page: number;
};

function BrowseList({ list, count, page }: BrowseListProps) {
  if (!list || list.length < 1) return <FetchPageNotFound />;
  if (list.length > 0)
    return (
      <>
        <ul className={styles.container}>
          {list.map((item) => (
            <BrowseItem
              name={item.name}
              cover={item.image_background}
              gameCount={item.games_count}
              popularGames={item.games}
              key={item.id}
            />
          ))}
        </ul>
        <div className={styles.pagination}>
          <Pagination currentPage={page} maxPage={Math.ceil(count / 20)} />
        </div>
      </>
    );
}

export default BrowseList;
