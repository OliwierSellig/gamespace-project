"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useSearch } from "../../../contexts/SearchContex";
import SearchInput from "../../global/SearchInput";
import { setPage } from "../../../utils/functions";

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
