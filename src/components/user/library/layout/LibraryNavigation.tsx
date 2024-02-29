"use client";

import { Dispatch, SetStateAction } from "react";
import UserSearchInput from "../../locale/userSearchInput/UserSearchInput";
import UserSelectContainer from "../../locale/userSelectContainer/UserSelectContainer";
import UserSelector from "../../locale/userSelectContainer/UserSelector";
import styles from "./libraryNavigation.module.scss";
import { changeToUrlSlug } from "../../../../utils/functions";
import { filterList, orderList } from "../../../../utils/data";

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
    <nav className={styles.container}>
      <UserSelectContainer>
        <UserSelector
          activeItem={filterByList.find(
            (item) => changeToUrlSlug(item.item) === filterBy
          )}
          list={filterByList}
        >
          Filter By
        </UserSelector>
        <UserSelector
          activeItem={orderByList.find(
            (item) => changeToUrlSlug(item.item) === orderBy
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
    </nav>
  );
}

export default LibraryNavigation;
