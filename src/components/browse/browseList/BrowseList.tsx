import { fetchedParentResult } from "../../../utils/types";
import Pagination from "../../global/pagination/Pagination";
import BrowseItem from "../browseItem/BrowseItem";
import styles from "./browseList.module.scss";
import FetchPageNotFound from "../../global/fetchPageNotFound/FetchPageNotFound";

type BrowseListProps = {
  list: fetchedParentResult[];
  count: number;
  page: number;
  type: "genre" | "platform" | "dev";
};

function BrowseList({ list, count, page, type }: BrowseListProps) {
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
              href={`/search?${type}=${item.id}`}
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
