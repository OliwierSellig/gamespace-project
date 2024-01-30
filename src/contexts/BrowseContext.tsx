"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ChildrenProp } from "../utils/types";
import { usePathname } from "next/navigation";

const BrowseContext = createContext<ContextType | undefined>(undefined);

type ContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  currentPath: string;
};

function BrowseProvider({ children }: ChildrenProp) {
  const [query, setQuery] = useState<string>("");
  const pathname = usePathname();

  const currentPath = pathname.split("/").at(-1);

  console.log(query);
  return (
    <BrowseContext.Provider value={{ query, setQuery, currentPath }}>
      {children}
    </BrowseContext.Provider>
  );
}

function useBrowse() {
  const value = useContext(BrowseContext);
  if (value === undefined)
    throw new Error("Search context was used outside of a provider");
  return value;
}

export { useBrowse, BrowseProvider };
