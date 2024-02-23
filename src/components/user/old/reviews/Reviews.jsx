"use client";

import { useState } from "react";
import ReviewsContainer from "./ReviewsContainer";
import UserSearchHeader from "../UserSearchHeader";

function Reviews() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <UserSearchHeader
        query={searchQuery}
        setQuery={setSearchQuery}
        placeholder="Search for your reviews"
        title="Your Reviews"
      />
      <ReviewsContainer searchQuery={searchQuery} />
    </>
  );
}

export default Reviews;
