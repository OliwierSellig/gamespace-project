"use client";

import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import UserSearchHeader from "../UserSearchHeader";
import CollectionsContainer from "./CollectionsContainer";

function Collections() {
  const { collections } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <UserSearchHeader
        title="Your Collections"
        placeholder="Search for collections"
        query={searchQuery}
        setQuery={setSearchQuery}
      />
      <CollectionsContainer collections={collections} query={searchQuery} />
    </>
  );
}

export default Collections;
