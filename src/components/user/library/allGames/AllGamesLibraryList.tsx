import { UserListItem } from "../../../../utils/types";
import Pagination from "../../../global/Pagination";
import GameLibraryItem from "../../locale/gameLibraryItem/GameLibraryItem";
import styles from "./allGamesLibraryList.module.scss";

type AllGamesLibraryList = {
  list: UserListItem[];
  count: number;
  orderBy: string;
  page: string;
  resultsPerPage?: number;
};

function AllGamesLibraryList({
  list,
  count,
  page,
  resultsPerPage = 12,
}: AllGamesLibraryList) {
  return (
    <>
      <ul className={styles.container}>
        {list.map((item) => (
          <li key={item.id}>
            <GameLibraryItem
              action={{
                actionIcon: item.action.actionIcon,
                actionLabel: item.action.actionLabel,
                handleClick: item.action.handleClick,
              }}
              imageSizes={{
                defalult: { number: 500, unit: "px" },
                sizes: [
                  { maxWidth: 1600, size: { number: 33, unit: "vw" } },
                  { maxWidth: 1044, size: { number: 46, unit: "vw" } },
                  { maxWidth: 520, size: { number: 98, unit: "vw" } },
                ],
              }}
              cover={item.background_image}
              name={item.name}
              id={item.id}
            />
          </li>
        ))}
      </ul>
      <Pagination
        padding={{ top: 3.6, left: 0, right: 0, bottom: 3.6 }}
        currentPage={parseInt(page)}
        maxPage={Math.ceil(count / resultsPerPage)}
      />
    </>
  );
}

export default AllGamesLibraryList;
