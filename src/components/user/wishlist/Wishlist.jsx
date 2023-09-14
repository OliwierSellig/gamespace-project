import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import GameList from "../../global/GameList";
import WishlistHeader from "./WishlistHeader";
import TurnBtn from "../../global/TurnBtn";
import { useUtility } from "../../../contexts/UtilityContext";

function Wishlist() {
  const { wishlist } = useUser();
  const { loadingStyle } = useUtility();
  const [searchQuery, setSearchQuery] = useState("");
  const [curPage, setCurPage] = useState(0);

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
      <WishlistHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {!wishlist.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).length && <p style={loadingStyle}>Nothing found</p>}
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
    </>
  );
}

export default Wishlist;
