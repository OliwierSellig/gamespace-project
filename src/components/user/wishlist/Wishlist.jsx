import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import GameList from "../../global/GameList";
import TurnBtn from "../../global/TurnBtn";
import UserSearchHeader from "../UserSearchHeader";
import NoSearchResults from "../../global/NoSearchResults";
import EmptyList from "../../global/EmptyList";

function Wishlist() {
  const { wishlist } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [curPage, setCurPage] = useState(0);

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function goNext() {
    if (
      12 * (curPage + 1) >
      wishlist.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).length
    )
      return;

    setCurPage((page) => page + 1);
  }
  function goPrev() {
    if (!curPage) return;
    setCurPage((page) => page - 1);
  }

  return (
    <>
      <UserSearchHeader
        query={searchQuery}
        setQuery={setSearchQuery}
        placeholder="Search for games"
        title="Your Wishlist"
      />
      {!wishlist.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).length &&
        (wishlist.length > 0 ? (
          <NoSearchResults />
        ) : (
          <EmptyList navigateTo="/search">
            There are no items in your wishlsit yet.
          </EmptyList>
        ))}
      {wishlist.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).length && (
        <GameList
          gameList={wishlist
            .filter((game) =>
              game.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(12 * curPage, 12 + 12 * curPage)}
          listStyle="list__wishlist"
        >
          <TurnBtn next={false} handleClick={goPrev} />
          <TurnBtn next={true} handleClick={goNext} />
        </GameList>
      )}
    </>
  );
}

export default Wishlist;
