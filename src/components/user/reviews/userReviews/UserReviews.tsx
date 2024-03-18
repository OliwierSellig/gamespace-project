"use client";

import { useState } from "react";
import ReviewsList from "../reviewsList/ReviewsList";
import ReviewsNavigation from "../reviewsNavigation/ReviewsNavigation";
import EmptyUserList from "../../locale/emptyUserList/EmptyUserList";
import { useUser } from "../../../../contexts/UserContext";

type UserReviewsProps = {
  orderBy: string;
  page: string;
  resultsPerPage?: number;
};

function UserReviews({ orderBy, page, resultsPerPage = 6 }: UserReviewsProps) {
  const [query, setQuery] = useState("");

  const { sortReviews } = useUser();

  const filteredList = sortReviews(orderBy).filter((review) =>
    review.game.name
      .toLowerCase()
      .replaceAll(" ", "")
      .includes(query.toLowerCase().replaceAll(" ", ""))
  );

  const maxPage = Math.ceil(filteredList.length / resultsPerPage);
  const curPage =
    page && parseInt(page) > 0 && parseInt(page) <= maxPage
      ? parseInt(page)
      : 1;

  const slicedFilteredList = filteredList.slice(
    (curPage - 1) * resultsPerPage,
    curPage * resultsPerPage
  );

  if (!sortReviews(orderBy) || !sortReviews(orderBy).length)
    return (
      <EmptyUserList>
        You haven&apos;t reviewed any games yet, please add review some games to
        fill this page.
      </EmptyUserList>
    );
  return (
    <>
      <ReviewsNavigation orderBy={orderBy} query={query} setQuery={setQuery} />
      <ReviewsList
        curPage={curPage}
        maxPage={maxPage}
        list={slicedFilteredList}
      />
    </>
  );
}

export default UserReviews;
