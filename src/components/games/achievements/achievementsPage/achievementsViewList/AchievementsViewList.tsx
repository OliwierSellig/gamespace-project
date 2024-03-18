import { AchievementResult } from "../../../../../utils/types";
import FetchPageNotFound from "../../../../global/FetchPageNotFound";
import Pagination from "../../../../global/Pagination";
import AchievementsItem from "../../achievementsItem/AchievementsItem";
import styles from "./achievementsViewList.module.scss";

type AchievementsViewListProps = {
  list: AchievementResult[];
  count: number;
  achievementsPerPage: number;
  currentPage: number;
};

function AchievementsViewList({
  list,
  count,
  achievementsPerPage,
  currentPage,
}: AchievementsViewListProps) {
  if (!list || !list.length) return <FetchPageNotFound />;

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {list.map((item) => (
          <AchievementsItem achievement={item} key={item.id} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        maxPage={Math.ceil(count / achievementsPerPage)}
      />
    </div>
  );
}

export default AchievementsViewList;
