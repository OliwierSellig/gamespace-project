"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { setPage } from "../../../utils/functions/functions";
import { useSearch } from "../../../contexts/SearchContex";
import SearchInput from "../searchInput/SearchInput";

function SearchQuery() {
  const { query, setQuery } = useSearch();
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  return (
    <SearchInput
      inputValue={query}
      placeholder="Search for games"
      handleChange={(e: string) => {
        setQuery(e);
        if (params.get("page") && parseInt(params.get("page")) !== 1) {
          setPage(router, pathname, params, 1, 1);
        }
      }}
    />
  );
}

export default SearchQuery;
