"use client";

import SearchInput from "../global/SearchInput";
import styles from "./search.module.scss";
import { useBrowse } from "../../contexts/BrowseContext";

function Search() {
  const { currentPath, query, setQuery } = useBrowse();

  const placeholder =
    currentPath === "genres"
      ? "Genres"
      : currentPath === "developers"
      ? "Developers"
      : "Platforms";

  return (
    <div className={styles.container}>
      <SearchInput
        inputValue={query}
        handleChange={(e) => setQuery(e)}
        placeholder={`Search ${placeholder}`}
      />
    </div>
  );
}

export default Search;
