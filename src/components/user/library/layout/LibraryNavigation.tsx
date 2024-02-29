"use client";

import { useState } from "react";
import UserSearchInput from "../../locale/userSearchInput/UserSearchInput";
import UserSelectContainer from "../../locale/userSelectContainer/UserSelectContainer";
import UserSelector from "../../locale/userSelectContainer/UserSelector";
import styles from "./libraryNavigation.module.scss";
import { ChildrenProp } from "../../../../utils/types";

const filterList = [
  { item: "All games", currentlyActive: true },
  { item: "Developers", currentlyActive: false },
];

const sortList = [
  { item: "Relevance", currentlyActive: true },
  { item: "Release Date", currentlyActive: false },
];

function LibraryNavigation({ children }: ChildrenProp) {
  const [query, setQuery] = useState<string>("");
  console.log(query);
  return (
    <>
      <nav className={styles.container}>
        <UserSelectContainer>
          <UserSelector list={filterList}>Filter By</UserSelector>
          <UserSelector list={sortList}>Sort By</UserSelector>
        </UserSelectContainer>
        <UserSearchInput
          placeholder="Search Games"
          inputValue={query}
          handleChange={setQuery}
        />
      </nav>
      {children}
    </>
  );
}

export default LibraryNavigation;
