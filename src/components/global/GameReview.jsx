import { useState } from "react";
import styles from "./gameReview.module.scss";

function GameReview({ game }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const COMMENT_LENGTH = 250;

  return (
    <div className={styles.background}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(34, 34, 34, 0.7), rgba(34, 34, 34, 0.7)), url(${game.background_image})`,
        }}
      >
        <header className={styles.header}>
          <h2 className={styles.gameTitle}>God of War: Ragnarok</h2>
          <p className={styles.info}>
            <span className={styles.ratingTitle}>Exceptional</span>
            <img
              className={styles.icon}
              src="/svg/exceptional.svg"
              alt="Exceptional"
            />
          </p>
        </header>
        <div className={styles.review}>
          <input
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className={styles.input}
          />
          <span className={styles.rating}>{`${Number(rating).toFixed(
            1
          )}/5`}</span>
        </div>
        <div className={styles.comment}>
          <header className={styles.comment__header}>
            <h3 className={styles.comment__heading}>
              Tell us, what do you think:
            </h3>
            <span className={styles.comment__letters}>{`Letters left: ${
              COMMENT_LENGTH - comment.length
            }`}</span>
          </header>
          <textarea
            className={styles.comment__area}
            placeholder="Comment something about the game..."
            maxLength={COMMENT_LENGTH}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default GameReview;
