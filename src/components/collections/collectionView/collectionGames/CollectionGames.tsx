"use client";

import { useState } from "react";
import CollectionGamesNav from "./CollectionGamesNav";
import UserGamesList from "../../../user/locale/userGamesList/UserGamesList";
import { useUser } from "../../../../contexts/UserContext";
import CollectionGamesList from "./CollectionGamesList";
import { HiMiniBookmarkSlash } from "react-icons/hi2";

type CollectionGamesProps = { orderBy: string };

function CollectionGames({ orderBy }: CollectionGamesProps) {
  const { state } = useUser();
  const [query, setQuery] = useState("");

  return (
    <>
      <CollectionGamesNav query={query} orderBy={orderBy} setQuery={setQuery} />
      <CollectionGamesList
        list={state.library.map((game) => {
          return {
            ...game,
            action: {
              actionLabel: "Remove from Wishlist",
              actionIcon: HiMiniBookmarkSlash,
              handleClick: () =>
                console.log(`Removed ${game.name} from collection!`),
            },
          };
        })}
        curPage={1}
        maxPage={3}
      />
    </>
  );
}

export default CollectionGames;
