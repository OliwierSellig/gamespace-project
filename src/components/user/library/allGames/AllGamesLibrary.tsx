import { useUser } from "../../../../contexts/UserContext";
import { HiMiniBookmarkSlash } from "react-icons/hi2";
import AllGamesLibraryList from "./AllGamesLibraryList";

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
  const { removeFromLibrary, sortGames } = useUser();
  const sorted = sortGames("library", orderBy);
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
  const maxPage = Math.ceil(games.length / resultsPerPage);
  const curPage =
    page && parseInt(page) > 0 && parseInt(page) <= maxPage
      ? parseInt(page)
      : 1;

  const filteredGames = games
    .filter((game) =>
      game.name
        .toLowerCase()
        .replaceAll(" ", "")
        .includes(query.toLowerCase().replaceAll(" ", ""))
    )
    .slice((curPage - 1) * resultsPerPage, curPage * resultsPerPage);

  return (
    <AllGamesLibraryList
      list={filteredGames}
      maxPage={maxPage}
      curPage={curPage}
    />
  );
}

export default AllGamesLibrary;
