"use client";

import { useState } from "react";
import { filterList } from "../../../../utils/data";
import { changeToUrlSlug } from "../../../../utils/functions";
import AllGamesLibraryList from "../allGames/AllGamesLibrary";
import FilteredGamesLibraryList from "../filteredGames/FilteredGamesLibraryList";
import LibraryNavigation from "./LibraryNavigation";

type UserLibraryProps = {
  orderBy: string;
  filterBy: string;
  page: string;
};

function UserLibrary({ orderBy, filterBy, page }: UserLibraryProps) {
  const [query, setQuery] = useState("");

  return (
    <>
      <LibraryNavigation
        orderBy={orderBy}
        query={query}
        setQuery={setQuery}
        filterBy={filterBy}
      />
      {filterBy && filterBy !== changeToUrlSlug(filterList.at(0)) && (
        <FilteredGamesLibraryList
          filterBy={filterBy}
          page={page}
          query={query}
        />
      )}
      {(!filterBy || filterBy === changeToUrlSlug(filterList.at(0))) && (
        <AllGamesLibraryList orderBy={orderBy} page={page} query={query} />
      )}
    </>
  );
}

export default UserLibrary;
