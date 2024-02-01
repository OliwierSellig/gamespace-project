"use client";

import { usePlatforms } from "../../hooks/usePlatforms";
import BrowseList from "./BrowseList";

function Platforms() {
  const { platforms, isLoading } = usePlatforms({
    pageSize: 20,
    page: 1,
  });

  return <BrowseList isLoading={isLoading} data={platforms} />;
}

export default Platforms;
