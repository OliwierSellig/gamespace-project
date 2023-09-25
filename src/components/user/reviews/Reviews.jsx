import { Outlet } from "react-router-dom";
import ReviewsContainer from "./ReviewsContainer";
import ReviewsHeader from "./ReviewsHeader";
import { useState } from "react";

function Reviews() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <ReviewsHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ReviewsContainer searchQuery={searchQuery} />
      <Outlet />
    </>
  );
}

export default Reviews;
