import { ActionType, BasicItemType } from "../../../../utils/types/types";
import Pagination from "../../../global/pagination/Pagination";
import EmptyUserList from "../../../user/locale/emptyUserList/EmptyUserList";
import GameLibraryItem from "../../../user/locale/gameLibraryItem/GameLibraryItem";
import UserGamesList from "../../../user/locale/userGamesList/UserGamesList";

type CollectionGamesListProps = {
  list: (BasicItemType & { action: ActionType })[];
  curPage: number;
  maxPage: number;
};

function CollectionGamesList({
  list,
  curPage,
  maxPage,
}: CollectionGamesListProps) {
  if (!list || !list.length)
    return <EmptyUserList>You have no games matching that query</EmptyUserList>;
  return (
    <>
      <UserGamesList>
        {list.map((game) => (
          <li key={game.id}>
            <GameLibraryItem
              name={game.name}
              cover={game.cover}
              id={game.id}
              action={game.action}
              imageSizes={{
                defalult: { number: 500, unit: "px" },
                sizes: [
                  { maxWidth: 1600, size: { number: 33, unit: "vw" } },
                  { maxWidth: 1044, size: { number: 46, unit: "vw" } },
                  { maxWidth: 520, size: { number: 98, unit: "vw" } },
                ],
              }}
            />
          </li>
        ))}
      </UserGamesList>
      <Pagination
        maxPage={maxPage}
        currentPage={curPage}
        padding={{ top: 3.6, left: 0, right: 0, bottom: 4.8 }}
      />
    </>
  );
}

export default CollectionGamesList;
