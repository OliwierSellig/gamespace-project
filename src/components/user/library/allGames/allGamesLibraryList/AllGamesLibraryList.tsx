import { ActionType, BasicItemType } from "../../../../../utils/types/types";
import EmptyUserList from "../../../../global/emptyUserList/EmptyUserList";
import Pagination from "../../../../global/pagination/Pagination";
import GameLibraryItem from "../../../locale/gameLibraryItem/GameLibraryItem";
import UserGamesList from "../../../locale/userGamesList/UserGamesList";

type AllGamesLibraryListProps = {
  list: (BasicItemType & { action: ActionType })[];
  maxPage: number;
  curPage: number;
};

function AllGamesLibraryList({
  list,
  curPage,
  maxPage,
}: AllGamesLibraryListProps) {
  if (!list || !list.length)
    return <EmptyUserList>You have no games matching that query</EmptyUserList>;

  return (
    <>
      <UserGamesList>
        {list.map((game) => (
          <li key={game.id}>
            <GameLibraryItem
              action={{
                actionIcon: game.action.actionIcon,
                actionLabel: game.action.actionLabel,
                handleClick: game.action.handleClick,
              }}
              imageSizes={{
                defalult: { number: 500, unit: "px" },
                sizes: [
                  { maxWidth: 1600, size: { number: 33, unit: "vw" } },
                  { maxWidth: 1044, size: { number: 46, unit: "vw" } },
                  { maxWidth: 520, size: { number: 98, unit: "vw" } },
                ],
              }}
              cover={game.cover}
              name={game.name}
              id={game.id}
            />
          </li>
        ))}
      </UserGamesList>
      <Pagination
        padding={{ top: 3.6, left: 0, right: 0, bottom: 3.6 }}
        currentPage={curPage}
        maxPage={maxPage}
      />
    </>
  );
}

export default AllGamesLibraryList;
