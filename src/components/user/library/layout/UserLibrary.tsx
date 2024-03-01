"use client";

import { useState } from "react";
import { filterList } from "../../../../utils/data";
import { changeToUrlSlug } from "../../../../utils/functions";
import AllGamesLibraryList from "../allGames/AllGamesLibraryList";
import FilteredGamesLibraryList from "../filteredGames/FilteredGamesLibraryList";
import LibraryNavigation from "./LibraryNavigation";
import { useGames } from "../../../../hooks/useGames";

type UserLibraryProps = {
  orderBy: string;
  filterBy: string;
  page: string;
};

function UserLibrary({ orderBy, filterBy, page }: UserLibraryProps) {
  const [query, setQuery] = useState("");
  const { games, isLoading } = useGames({
    dates: {
      toDay: 30,
      toMonth: 11,
      toYear: 2023,
      fromDay: 1,
      fromMonth: 2,
      fromYear: 2018,
    },
  });

  const { games: ubiGames, isLoading: isLoadingUbi } = useGames({
    developers: [405],
  });

  return (
    <>
      <LibraryNavigation
        orderBy={orderBy}
        query={query}
        setQuery={setQuery}
        filterBy={filterBy}
      />
      {!isLoadingUbi &&
        filterBy &&
        filterBy !== changeToUrlSlug(filterList.at(0)) && (
          <FilteredGamesLibraryList
            list={ubiGames.results}
            count={ubiGames.count}
            page={page}
          />
        )}
      {!isLoading &&
        (!filterBy || filterBy === changeToUrlSlug(filterList.at(0))) && (
          <AllGamesLibraryList
            list={games.results}
            count={games.count}
            orderBy={orderBy}
            page={page}
          />
        )}
    </>
  );
}

export default UserLibrary;
