"use client";

import { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import { SingleGameItem } from "../../../utils/types";
import CommonRatingList from "./CommonRatingList";
import RangeBar from "./RangeBar";
import ReviewButtons from "./ReviewButtons";
import ReviewText from "./ReviewText";
import styles from "./updateReview.module.scss";

type UpdateReviewProps = {
  game: SingleGameItem;
};

function UpdateReview({ game }: UpdateReviewProps) {
  const { findInReviews } = useUser();
  const gameReview = findInReviews(game.id);
  const [currentRating, setCurrentRating] = useState<number>(
    gameReview?.rating || 0
  );
  const [reviewText, setReviewText] = useState<string>(
    gameReview?.content || ""
  );

  return (
    <div className={styles.container}>
      <RangeBar
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
      />
      <CommonRatingList
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
      />
      <ReviewText reviewText={reviewText} setReviewText={setReviewText} />
      <ReviewButtons
        game={game}
        rating={currentRating}
        reviewText={reviewText}
        alreadyReviewed={Boolean(gameReview)}
      />
    </div>
  );
}

export default UpdateReview;
