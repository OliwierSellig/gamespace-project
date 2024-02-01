"use client";

import { useDevelopers } from "../../hooks/useDevelopers";
import BrowseList from "./BrowseList";


function Developers() {
  const { developers, isLoading } = useDevelopers({
    pageSize: 20,
    page: 1,
  });

  return (
    <>
      <BrowseList data={developers} isLoading={isLoading} />
    </>
  );
}

export default Developers;
