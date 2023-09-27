import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import styles from "./gameReview.module.scss";

const COMMENT_LENGTH = 250;

function GameReview({ game }) {
  const { updateReviews, checkReviewed } = useUser();
  const backgroundRef = useRef(null);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // --------------------------------------
  // Getting an Emote for Certain Review
  // --------------------------------------

  function getReviewEmote() {
    if (!rating)
      return { name: "Game unrated", url: "/svg/danger-triangle.svg" };
    if (rating < 1.5) return { name: "Skip", url: "/svg/skip.svg" };
    if (rating >= 1.5 && rating < 3.5)
      return { name: "Meh", url: "/svg/meh.svg" };
    if (rating >= 3.5 && rating < 4.5)
      return { name: "Recommended", url: "/svg/recommended.svg" };
    if (rating >= 4.5)
      return { name: "Exceptional", url: "/svg/exceptional.svg" };
  }

  // --------------------------------------
  // Saving The Review
  // --------------------------------------

  function setReview() {
    const reviewItem = { rating, comment, game };
    updateReviews(reviewItem);
  }

  // -----------------------------------------------------
  // Checking Whether The Game Has Already Been Reviewed
  // -----------------------------------------------------

  useEffect(() => {
    const reviewedGame = checkReviewed(game.id);

    if (!reviewedGame) return;

    setRating(reviewedGame.rating);
    setComment(reviewedGame.comment);
  }, [checkReviewed, game]);

  return (
    <div
      className={styles.background}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target !== backgroundRef.current) return;
        navigate(-1);
      }}
    >
      <div
        className={styles.container}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(34, 34, 34, 0.7), rgba(34, 34, 34, 0.7)), url(${game.background_image})`,
        }}
      >
        <header className={styles.header}>
          <h2 className={styles.gameTitle}>{game.name}</h2>
          <p className={styles.info}>
            <span className={styles.ratingTitle}>{getReviewEmote()?.name}</span>
            <img
              className={styles.icon}
              src={getReviewEmote()?.url}
              alt={getReviewEmote()?.name}
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
        <button
          className={`${styles.submitBtn} ${!rating ? styles.disabled : ""}`}
          onClick={() => {
            if (!rating) return;
            setReview();
            navigate(-1);
          }}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default GameReview;
