"use client";

import SearchComponent from "@/components/search/SearchComponent";
import { SearchProvider } from "@/contexts/SearchContext";

function page() {
  return (
    <SearchProvider>
      <SearchComponent />
    </SearchProvider>
  );
}

export default page;
