"use client";

import { useUser } from "../../../../../contexts/UserContext";
import ReviewItem from "../../../locale/reviewItem/ReviewItem";
import styles from "./reviewsRow.module.scss";

function ReviewsRow() {
  const { getLatestReviews } = useUser();
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
    </ul>
  );
}

export default ReviewsRow;
