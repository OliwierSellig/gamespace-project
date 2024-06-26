"use client";

import { useState } from "react";
import { HiMiniBookmarkSlash } from "react-icons/hi2";
import { sortGames } from "../../../../utils/functions/functions";
import { useUser } from "../../../../contexts/userContext/UserContext";
import { useWishlist } from "../../../../contexts/wishlistContext/WishlistContext";
import EmptyUserList from "../../../global/emptyUserList/EmptyUserList";
import WishlistGamesList from "../wishlistGamesList/WishlistGamesList";
import WishlistNavigation from "../wishlistNavigation/WishlistNavigation";

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
  const { state } = useUser();
  const { removeFromWishlist } = useWishlist();
  const games = sortGames(state.wishlist, orderBy).map((game) => {
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
