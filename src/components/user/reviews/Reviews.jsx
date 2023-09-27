import { useState } from "react";
import { Outlet } from "react-router-dom";
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
      <Outlet />
    </>
  );
}

export default Reviews;
