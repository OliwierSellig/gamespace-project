"use client";

import { useUser } from "../../../../../contexts/UserContext";
import EmptyUserSwiperItem from "../../../locale/emptyUserSwiperItem/EmptyUserSwiperItem";
import ReviewItem from "../../../locale/reviewItem/ReviewItem";
import styles from "./reviewsRow.module.scss";

function ReviewsRow() {
  const { getLatestReviews } = useUser();
  const emptySlotsCount = Math.max(0, 2 - getLatestReviews().length);
  return (
    <ul className={styles.container}>
      {getLatestReviews().map((review) => (
        <ReviewItem
          key={review.game.name}
          rating={review.rating}
          game={review.game}
          author={review.author}
          date={review.editDate}
          review={review.content}
        />
      ))}
      {Array.from({ length: emptySlotsCount }, (_, i) => (
        <li key={i}>
          <EmptyUserSwiperItem
            additionalStyle={{
              minHeight: "34rem",
              height: "100%",
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default ReviewsRow;
