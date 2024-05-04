"use client";

import { useState } from "react";
import { useUser } from "../../../../contexts/userContext/UserContext";
import EmptyUserList from "../../../global/emptyUserList/EmptyUserList";
import CollectionsList from "../list/collectionList/CollectionsList";
import CollectionsNavigation from "../navigation/collectionNavigation/CollectionsNavigation";

type UserCollectionsProps = {
  page: string;
  resultsPerPage?: number;
};

function UserCollections({ page, resultsPerPage = 6 }: UserCollectionsProps) {
  const [query, setQuery] = useState<string>("");
  const { state } = useUser();
  const { collections } = state;

  const filteredCollections = collections.filter((collection) =>
    (collection.title || "")
      .toLowerCase()
      .trim()
      .replaceAll(" ", "-")
      .includes(query.toLowerCase().trim().replaceAll(" ", "-")),
  );

  const maxPage = Math.ceil(filteredCollections.length / resultsPerPage);
  const curPage =
    page && parseInt(page) > 0 && parseInt(page) <= maxPage
      ? parseInt(page)
      : 1;

  const filteredCollectionsPerPage = filteredCollections.slice(
    (curPage - 1) * resultsPerPage,
    curPage * resultsPerPage,
  );

  if (!collections || !collections.length)
    return (
      <EmptyUserList
        button={{
          text: "Start a new Collection",
          navigateTo: "createCollection",
        }}
      >
        It seems you haven&apos;t created any collections yet.
      </EmptyUserList>
    );

  return (
    <>
      <CollectionsNavigation query={query} setQuery={setQuery} />
      <CollectionsList
        list={filteredCollectionsPerPage}
        curPage={curPage}
        maxPage={maxPage}
      />
    </>
  );
}

export default UserCollections;
