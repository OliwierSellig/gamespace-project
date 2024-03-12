"use client";

import { useState } from "react";
import CollectionsList from "./CollectionsList";
import CollectionsNavigation from "./CollectionsNavigation";
import { collections } from "../../../utils/data";

function UserCollections() {
  const [query, setQuery] = useState<string>("");
  return (
    <>
      <CollectionsNavigation query={query} setQuery={setQuery} />
      <CollectionsList list={collections} />
    </>
  );
}

export default UserCollections;
