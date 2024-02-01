import { useSearchParams } from "next/navigation";
import { fetchedParentType } from "../../utils/types";
import Pagination from "../global/Pagination";
import BrowseItem from "./BrowseItem";

import styles from "./browseList.module.scss";

type BrowseListProps = {
  data: fetchedParentType;
  isLoading: boolean;
};

function BrowseList({ data, isLoading }: BrowseListProps) {
  const params = useSearchParams();

  if (!isLoading)
    return (
      <>
        <ul className={styles.container}>
          {data.results.map((item) => (
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
          <Pagination
            currentPage={parseInt(params.get("page")) || 1}
            maxPage={Math.ceil(data.count / 20)}
          />
        </div>
      </>
    );
}

export default BrowseList;
