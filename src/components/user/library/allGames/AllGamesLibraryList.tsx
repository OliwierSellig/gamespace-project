import { ActionType, BasicItemType } from "../../../../utils/types";
import Pagination from "../../../global/Pagination";
import EmptyUserList from "../../locale/emptyUserList/EmptyUserList";
import GameLibraryItem from "../../locale/gameLibraryItem/GameLibraryItem";
import UserGamesList from "../../locale/userGamesList/userGamesList";

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
  return (
    <>
      {list && list.length > 0 ? (
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
      ) : (
        <EmptyUserList>
          Your library seems to be empty, please add some games to fill this
          page.
        </EmptyUserList>
      )}
    </>
  );
}

export default AllGamesLibraryList;
