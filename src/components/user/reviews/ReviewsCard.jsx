import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import styles from "./reviewsCard.module.scss";

function ReviewCard({ review }) {
  const { deleteReview } = useUser();
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [wantsDelete, setWantsDelete] = useState(false);

  // ---------------------------------------------
  // Hiding The Delete Window on Mouseleave
  // ---------------------------------------------

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.addEventListener("mouseleave", () =>
      setWantsDelete(false)
    );

    function dispatch() {
      containerRef.current?.removeEventListener("mouseleave", () =>
        setWantsDelete(false)
      );
    }

    return dispatch;
  }, []);

  return (
    <li
      ref={containerRef}
      style={{
        backgroundImage: `linear-gradient(
      180deg,
      rgba(34, 34, 34, 0.8),
      rgba(34, 34, 34, 0.8) 
    ), url(${review.game.background_image})`,
      }}
      tabIndex={0}
      role="button"
      className={styles.container}
    >
      <div className={styles.header}>
        <span className={styles.gameName}>{review.game.name}</span>
        <div className={styles.rating}>{`${review.rating}/5`}</div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
      <div className={styles.options}>
        <button
          className={styles.button}
          onClick={() => navigate(`${review.game.id}`)}
        >
          Edit
        </button>
        <button className={styles.button} onClick={() => setWantsDelete(true)}>
          Delete
        </button>
      </div>

      <div className={`${styles.delete} ${!wantsDelete ? styles.hidden : ``}`}>
        <p className={styles.delete__info}>
          Do you really want to delete this review?
        </p>
        <div className={styles.delete__options}>
          <button
            className={`${styles.delete__btn} ${styles.delete__yes}`}
            onClick={() => deleteReview(review.game.id)}
          >
            Yes
          </button>
          <button
            className={`${styles.delete__btn} ${styles.delete__no}`}
            onClick={() => setWantsDelete(false)}
          >
            No
          </button>
        </div>
      </div>
    </li>
  );
}

export default ReviewCard;
