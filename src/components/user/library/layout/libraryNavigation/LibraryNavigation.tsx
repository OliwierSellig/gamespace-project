"use client";

import { Dispatch, SetStateAction } from "react";
import { orderList } from "../../../../../utils/data/global";
import { filterList } from "../../../../../utils/data/user";
import { changeToUrlSlug } from "../../../../../utils/functions/functions";
import UserGamesListNav from "../../../locale/userGamesListNav/UserGamesListNav";
import UserSearchInput from "../../../locale/userSearchInput/UserSearchInput";
import UserSelectContainer from "../../../locale/userSelectContainer/UserSelectContainer";
import UserSelector from "../../../locale/userSelector/UserSelector";

type LibraryNavigationProps = {
  orderBy: string;
  filterBy: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

function LibraryNavigation({
  orderBy,
  filterBy,
  query,
  setQuery,
}: LibraryNavigationProps) {
  const filterByList = filterList.map((item) => {
    return {
      item,
      href: `?filter=${changeToUrlSlug(item)}`,
    };
  });
  const orderByList = orderList.map((item) => {
    return {
      item,
      href: `?order=${changeToUrlSlug(item)}`,
    };
  });

  return (
    <UserGamesListNav>
      <UserSelectContainer>
        <UserSelector
          activeItem={filterByList.find(
            (item) => changeToUrlSlug(item.item) === filterBy,
          )}
          list={filterByList}
        >
          Filter By
        </UserSelector>
        <UserSelector
          disabled={filterList
            .slice(1)
            .map((filterBy) => changeToUrlSlug(filterBy))
            .includes(filterBy)}
          activeItem={orderByList.find(
            (item) => changeToUrlSlug(item.item) === orderBy,
          )}
          list={orderByList}
        >
          Sort By
        </UserSelector>
      </UserSelectContainer>
      <UserSearchInput
        placeholder="Search Games"
        inputValue={query}
        handleChange={setQuery}
      />
    </UserGamesListNav>
  );
}

export default LibraryNavigation;
