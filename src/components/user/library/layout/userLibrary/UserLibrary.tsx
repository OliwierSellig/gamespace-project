"use client";

import { useState } from "react";
import { filterList } from "../../../../../utils/data/user";
import { changeToUrlSlug } from "../../../../../utils/functions/functions";
import { useUser } from "../../../../../contexts/userContext/UserContext";
import EmptyUserList from "../../../../global/emptyUserList/EmptyUserList";
import AllGamesLibraryList from "../../allGames/allGamesLibrary/AllGamesLibrary";
import FilteredGamesLibrary from "../../filteredGames/filteredGamesLibrary/FilteredGamesLibrary";
import LibraryNavigation from "../libraryNavigation/LibraryNavigation";

type UserLibraryProps = {
  orderBy: string;
  filterBy: string;
  page: string;
};

function UserLibrary({ orderBy, filterBy, page }: UserLibraryProps) {
  const [query, setQuery] = useState("");
  const { state } = useUser();
  const { library } = state;
  if (!library || !library.length)
    return (
      <EmptyUserList>
        You haven&apos;t added any games to your library yet, please add some
        games to fill this page.
      </EmptyUserList>
    );
  return (
    <>
      <LibraryNavigation
        orderBy={orderBy}
        query={query}
        setQuery={setQuery}
        filterBy={filterBy}
      />
      {filterBy && filterBy !== changeToUrlSlug(filterList.at(0)) && (
        <FilteredGamesLibrary filterBy={filterBy} page={page} query={query} />
      )}
      {(!filterBy || filterBy === changeToUrlSlug(filterList.at(0))) && (
        <AllGamesLibraryList orderBy={orderBy} page={page} query={query} />
      )}
    </>
  );
}

export default UserLibrary;
