"use client";

import { filterList } from "../../../../utils/data";
import { changeToUrlSlug } from "../../../../utils/functions";
import AllGamesLibraryList from "../allGames/AllGamesLibraryList";
import FilteredGamesLibraryList from "../filteredGames/FilteredGamesLibraryList";
import LibraryNavigation from "./LibraryNavigation";

type UserLibraryProps = {
  orderBy: string;
  filterBy: string;
};

function UserLibrary({ orderBy, filterBy }: UserLibraryProps) {
  return (
    <>
      <LibraryNavigation orderBy={orderBy} filterBy={filterBy} />
      {filterBy && filterBy !== changeToUrlSlug(filterList.at(0)) ? (
        <FilteredGamesLibraryList />
      ) : (
        <AllGamesLibraryList />
      )}
    </>
  );
}

export default UserLibrary;
