"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useSearch } from "../../contexts/SearchContex";
import SearchInput from "../global/SearchInput";

function SearchQuery() {
  const { query, setQuery } = useSearch();
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  function setPage(p: number) {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set("page", p.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  }

  return (
    <SearchInput
      inputValue={query}
      placeholder="Search for games"
      handleChange={(e: string) => {
        setQuery(e);
        if (params.get("page") && parseInt(params.get("page")) !== 1) {
          setPage(1);
        }
      }}
    />
  );
}

export default SearchQuery;
