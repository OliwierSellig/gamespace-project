"use client";

import { useState } from "react";
import WishlistNavigation from "./WishlistNavigation";
import { useGames } from "../../../../hooks/useGames";
import AllGamesLibraryList from "../../library/allGames/AllGamesLibrary";
import { HiMiniBookmarkSlash } from "react-icons/hi2";

type UserWishlistProps = {
  orderBy: string;
  page: string;
};

function UserWishlist({ orderBy, page }: UserWishlistProps) {
  const [query, setQuery] = useState<string>("");
  const { games, isLoading } = useGames({
    dates: {
      fromDay: 1,
      fromMonth: 2,
      fromYear: 2007,
      toDay: 28,
      toMonth: 12,
      toYear: 2012,
    },
  });
  const gamesList = isLoading
    ? []
    : games.results.map((game) => {
        return {
          ...game,
          action: {
            actionLabel: "Remove from Wishlist",
            actionIcon: HiMiniBookmarkSlash,
            handleClick: () => {
              console.log(game.id);
            },
          },
        };
      });

  console.log(gamesList);
  return (
    <>
      <WishlistNavigation query={query} setQuery={setQuery} orderBy={orderBy} />
      {!isLoading && (
        <AllGamesLibraryList
          list={gamesList}
          page={page}
          count={games.count}
          orderBy={orderBy}
        />
      )}
    </>
  );
}

export default UserWishlist;
