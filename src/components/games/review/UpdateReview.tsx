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
  const { checkInReviews } = useUser();
  const [currentRating, setCurrentRating] = useState<number>(0);

  return (
    <div className={styles.container}>
      <RangeBar
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
      />
      <CommonRatingList />
      <ReviewText />
      <ReviewButtons />
    </div>
  );
}

export default UpdateReview;
