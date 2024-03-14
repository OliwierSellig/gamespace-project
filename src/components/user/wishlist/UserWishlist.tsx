"use client";

import { useState } from "react";
import WishlistNavigation from "./WishlistNavigation";
import { HiMiniBookmarkSlash } from "react-icons/hi2";
import { useUser } from "../../../contexts/UserContext";
import WishlistGamesList from "./WishlistGamesList";
import EmptyUserList from "../locale/emptyUserList/EmptyUserList";

type UserWishlistProps = {
  orderBy: string;
  page: string;
  resultsPerPage?: number;
};

function UserWishlist({
  orderBy,
  page,
  resultsPerPage = 12,
}: UserWishlistProps) {
  const [query, setQuery] = useState<string>("");
  const { sortGames, removeFromWishlist } = useUser();
  const games = sortGames({ type: "wishlist" }, orderBy).map((game) => {
    return {
      ...game,
      action: {
        actionLabel: "Remove from Wishlist",
        actionIcon: HiMiniBookmarkSlash,
        handleClick: () => removeFromWishlist(game.id),
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
        You haven&apos;t added any games to your wishlist yet, please add some
        games to fill this page.
      </EmptyUserList>
    );

  return (
    <>
      <WishlistNavigation query={query} setQuery={setQuery} orderBy={orderBy} />
      <WishlistGamesList
        curPage={curPage}
        maxPage={maxPage}
        list={filteredQueryGames}
      />
    </>
  );
}

export default UserWishlist;
