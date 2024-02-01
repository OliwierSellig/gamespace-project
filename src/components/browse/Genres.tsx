"use client";

import { useGenres } from "../../hooks/useGenres";
import BrowseList from "./BrowseList";

function Genres() {
  const { genres, isLoading } = useGenres({
    pageSize: 20,
    page: 1,
  });
  return <BrowseList isLoading={isLoading} data={genres} />;
}

export default Genres;
