import { HiMiniBookmarkSlash } from "react-icons/hi2";
import { sortGames } from "../../../../../utils/functions/functions";
import { useUser } from "../../../../../contexts/UserContext";
import { useLibrary } from "../../../../../contexts/libraryContext/LibraryContext";
import AllGamesLibraryList from "../allGamesLibraryList/AllGamesLibraryList";

type AllGamesLibraryProps = {
  orderBy: string;
  page: string;
  resultsPerPage?: number;
  query: string;
};

function AllGamesLibrary({
  orderBy,
  page,
  resultsPerPage = 12,
  query,
}: AllGamesLibraryProps) {
  const { state } = useUser();
  const { removeFromLibrary } = useLibrary();
  const sorted = sortGames(state.library, orderBy);
  const games = sorted.map((game) => {
    return {
      ...game,
      action: {
        actionLabel: "Remove from Library",
        actionIcon: HiMiniBookmarkSlash,
        handleClick: () => removeFromLibrary(game.id),
      },
    };
  });

  const filteredGames = games.filter((game) =>
    game.name
      .toLowerCase()
      .replaceAll(" ", "")
      .includes(query.toLowerCase().replaceAll(" ", "")),
  );

  const maxPage = Math.ceil(filteredGames.length / resultsPerPage);
  const curPage =
    page && parseInt(page) > 0 && parseInt(page) <= maxPage
      ? parseInt(page)
      : 1;

  const filteredQueryGames = filteredGames.slice(
    (curPage - 1) * resultsPerPage,
    curPage * resultsPerPage,
  );

  return (
    <AllGamesLibraryList
      list={filteredQueryGames}
      maxPage={maxPage}
      curPage={curPage}
    />
  );
}

export default AllGamesLibrary;
