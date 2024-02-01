"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchInput from "../global/SearchInput";
import styles from "./search.module.scss";
import { useState } from "react";

function Search() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const currentPath = pathname.split("/").at(-1);
  const [q, setQ] = useState("");

  function setQuery(q: string) {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set("search", q);
    if (current.get("page") && current.get("page") !== "1")
      current.set("page", "1");
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  }

  const placeholder =
    currentPath === "genres"
      ? "Genres"
      : currentPath === "developers"
      ? "Developers"
      : "Platforms";

  return (
    <div className={styles.container}>
      <SearchInput
        inputValue={q}
        handleChange={(e) => {
          setQuery(e);
          setQ(e);
        }}
        placeholder={`Search ${placeholder}`}
      />
    </div>
  );
}

export default Search;
