import { Dispatch, SetStateAction } from "react";
import styles from "./reviewText.module.scss";

type ReviewTextProps = {
  reviewText: string;
  setReviewText: Dispatch<SetStateAction<string>>;
};

const MAX_CHARACTERS = 650;

function ReviewText({ reviewText, setReviewText }: ReviewTextProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Review Text</h2>
      <div className={styles.box}>
        <textarea
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
          placeholder="Write a review here..."
          className={styles.content}
          maxLength={MAX_CHARACTERS}
        />
        <span className={styles.info}>
          {MAX_CHARACTERS - reviewText.length} characters left
        </span>
      </div>
    </div>
  );
}

export default ReviewText;
