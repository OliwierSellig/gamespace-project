"use client";

import { useState } from "react";
import CollectionGamesNav from "./CollectionGamesNav";
import { useUser } from "../../../../contexts/UserContext";
import CollectionGamesList from "./CollectionGamesList";
import { HiMiniBookmarkSlash } from "react-icons/hi2";
import EmptyUserList from "../../../user/locale/emptyUserList/EmptyUserList";

type CollectionGamesProps = {
  orderBy: string;
  page: string;
  resultsPerPage?: number;
  collectionID: number;
};

function CollectionGames({
  orderBy,
  page,
  resultsPerPage = 12,
  collectionID,
}: CollectionGamesProps) {
  const { sortGames, removeFromLibrary } = useUser();
  const [query, setQuery] = useState("");
  const games = sortGames(
    { type: "collections", id: collectionID },
    orderBy
  ).map((game) => {
    return {
      ...game,
      action: {
        actionLabel: "Remove from Wishlist",
        actionIcon: HiMiniBookmarkSlash,
        handleClick: () => removeFromLibrary(game.id),
      },
    };
  });

  const filteredGames = games.filter((game) =>
    game.name
      .toLowerCase()
      .replaceAll(" ", "")
      .includes(query.toLowerCase().replaceAll(" ", ""))
  );

  const maxPage = Math.ceil(filteredGames.length / resultsPerPage);
  const curPage =
    page && parseInt(page) > 0 && parseInt(page) <= maxPage
      ? parseInt(page)
      : 1;

  const filteredQueryGames = filteredGames.slice(
    (curPage - 1) * resultsPerPage,
    curPage * resultsPerPage
  );

  if (!games || !games.length)
    return (
      <EmptyUserList>
        You haven&apos;t added any games to this collection yet, please add some
        games to fill the page.
      </EmptyUserList>
    );

  return (
    <>
      <CollectionGamesNav query={query} orderBy={orderBy} setQuery={setQuery} />
      <CollectionGamesList
        list={filteredQueryGames}
        curPage={curPage}
        maxPage={maxPage}
      />
    </>
  );
}

export default CollectionGames;
