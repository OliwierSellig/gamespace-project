import { useEffect, useState } from "react";
import { useUtility } from "../../../contexts/UtilityContext";
import { useUser } from "../../../contexts/UserContext";
import GameList from "../../global/GameList";
import GameListFiltered from "./GameListFiltered";
import LibraryHeader from "./LibraryHeader";
import SearchInput from "../../global/SearchInput";
import TurnBtn from "../../global/TurnBtn";

const PAGE_AMOUNT = 20;

function UserLibrary() {
  const { gamesPlayed } = useUser();
  const { loadingStyle } = useUtility();
  const [libraryGames, setLibraryGames] = useState([]);
  const [filterBy, setFilterBy] = useState("all");
  const [orderBy, setOrderBy] = useState("relevance");
  const [searchQuery, setSearchQuery] = useState("");
  const [curPage, setCurPage] = useState(0);

  // ------------------------------------
  // Switching The Order
  // ------------------------------------

  useEffect(() => {
    function getGameList() {
      return gamesPlayed.map((game) => game.game);
    }

    switch (orderBy) {
      case "relevance":
        setLibraryGames(getGameList());
        return;
      case "rating":
        setLibraryGames(getGameList().sort((a, b) => a.rating - b.rating));
        return;
      case "popularity":
        setLibraryGames(getGameList().sort((a, b) => a.added - b.added));
        return;
      case "released":
        setLibraryGames(
          getGameList().sort(
            (a, b) =>
              new Date(a.released).getTime() - new Date(b.released).getTime()
          )
        );
        return;
      default:
        throw new Error("Unknown order filter");
    }
  }, [orderBy, gamesPlayed, searchQuery]);

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function goNext() {
    if (
      libraryGames.filter((game) =>
        game.slug.includes(searchQuery.toLowerCase().replaceAll(" ", "-"))
      ).length <
      (curPage + 1) * PAGE_AMOUNT
    ) {
      return;
    }
    setCurPage((page) => page + 1);
  }

  function goPrev() {
    if (!curPage) return;
    setCurPage((page) => page - 1);
  }

  return (
    <>
      <LibraryHeader
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <SearchInput
        sizeFont={2.8}
        inputStyle="search__library"
        inputValue={searchQuery}
        handleChange={setSearchQuery}
      />
      {!libraryGames.filter((game) =>
        game.slug.includes(searchQuery.toLowerCase().replaceAll(" ", "-"))
      ).length &&
        filterBy === "all" && <p style={loadingStyle}>Nothing found...</p>}
      {filterBy === "all" && (
        <GameList
          gameList={[...libraryGames]
            .reverse()
            .filter((game) =>
              game.slug.includes(searchQuery.toLowerCase().replaceAll(" ", "-"))
            )
            .slice(PAGE_AMOUNT * curPage, PAGE_AMOUNT + PAGE_AMOUNT * curPage)}
          listStyle="list__library"
        >
          <TurnBtn next={false} handleClick={goPrev} size={5.2} />
          <TurnBtn next={true} handleClick={goNext} size={5.2} />
        </GameList>
      )}
      {filterBy !== "all" && (
        <GameListFiltered searchQuery={searchQuery} filterBy={filterBy} />
      )}
    </>
  );
}

export default UserLibrary;
