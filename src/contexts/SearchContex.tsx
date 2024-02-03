"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ChildrenProp } from "../utils/types";

const SearchContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};
function SearchProvider({ children }: ChildrenProp) {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const value = useContext(SearchContext);
  if (value === undefined)
    throw new Error("Search context was used outside of a provider");
  return value;
}

export { useSearch, SearchProvider };
