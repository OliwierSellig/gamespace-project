"use client";

import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import SingleCollectionHeader from "./SingleCollectionHeader";
import GameList from "../../global/GameList";
import TurnBtn from "../../global/TurnBtn";
import NoSearchResults from "../../global/NoSearchResults";

const AMOUNT_PER_PAGE = 9;

function CollectionView() {
  const { getCollectionByID } = useUser();
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [curPage, setCurPage] = useState(0);

  const selectedCollection = getCollectionByID(id);

  const filteredCollectionGames = selectedCollection.games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function goNext() {
    if ((curPage + 1) * AMOUNT_PER_PAGE >= filteredCollectionGames.length)
      return;
    setCurPage((page) => page + 1);
  }

  function goPrev() {
    if (!curPage) return;
    setCurPage((page) => page - 1);
  }

  return (
    <>
      <SingleCollectionHeader
        query={searchQuery}
        setQuery={setSearchQuery}
        collection={selectedCollection}
      />
      {filteredCollectionGames.length > 0 && (
        <GameList
          gameList={filteredCollectionGames.slice(
            0 + AMOUNT_PER_PAGE * curPage,
            AMOUNT_PER_PAGE + AMOUNT_PER_PAGE * curPage
          )}
          listStyle="list__wishlist"
        >
          <TurnBtn next={false} size={4.2} handleClick={goPrev} />
          <TurnBtn next={true} size={4.2} handleClick={goNext} />
        </GameList>
      )}
      {!filteredCollectionGames.length && <NoSearchResults />}
    </>
  );
}

export default CollectionView;
