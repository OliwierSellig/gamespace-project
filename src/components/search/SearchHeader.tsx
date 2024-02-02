"use client";

import OrderByBtn from "../global/OrderByBtn";
import SearchInput from "../global/SearchInput";
import styles from "./searchHeader.module.scss";
import { useState } from "react";

function SearchHeader() {
  const [query, setQuery] = useState<string>("");

  return (
    <header className={styles.header}>
      <OrderByBtn />
      <SearchInput inputValue={query} handleChange={setQuery} />
    </header>
  );
}

export default SearchHeader;
