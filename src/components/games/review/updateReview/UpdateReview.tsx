"use client";

import { useState } from "react";
import { SingleGameItem } from "../../../../utils/types/types";
import { useReviews } from "../../../../contexts/reviewsContext/ReviewsContext";
import UserInput from "../../../global/userInput/UserInput";
import CommonRatingList from "../commonRatingList/CommonRatingList";
import RangeBar from "../rangeBar/RangeBar";
import ReviewButtons from "../reviewButtons/ReviewButtons";
import styles from "./updateReview.module.scss";

type UpdateReviewProps = {
  game: SingleGameItem;
};

function UpdateReview({ game }: UpdateReviewProps) {
  const { findInReviews } = useReviews();
  const gameReview = findInReviews(game.id);
  const [currentRating, setCurrentRating] = useState<number>(
    gameReview?.rating || 0,
  );
  const [reviewText, setReviewText] = useState<string>(
    gameReview?.content || "",
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
      <UserInput
        type={{ name: "textArea", height: 24 }}
        placeholder="Write review here..."
        value={reviewText}
        handleChange={setReviewText}
        label="Review Text"
        maxCharacters={650}
        additionalStyle={{ marginBottom: "3.2rem" }}
      />
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
