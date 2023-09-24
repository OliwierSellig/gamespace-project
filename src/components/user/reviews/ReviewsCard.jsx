import { useEffect, useRef, useState } from "react";
import styles from "./reviewsCard.module.scss";

function ReviewCard() {
  const [wantsDelete, setWantsDelete] = useState(false);
  const containerRef = useRef(null);

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
    ), url(/img/heroBg/hero-background-1-large.webp)`,
      }}
      tabIndex={0}
      role="button"
      className={styles.container}
    >
      <div className={styles.header}>
        <span className={styles.gameName}>God of War: Ragnarok</span>
        <div className={styles.rating}>4.7/5</div>
      </div>
      <p className={styles.comment}>
        Had a lot of fun playing the game, the world presented in Skyrim just
        sunk me in and i could not stop playing. The immersion is such...
      </p>
      <div className={styles.options}>
        <button className={styles.button}>Edit</button>
        <button className={styles.button} onClick={() => setWantsDelete(true)}>
          Delete
        </button>
      </div>

      <div className={`${styles.delete} ${!wantsDelete ? styles.hidden : ``}`}>
        <p className={styles.delete__info}>
          Do you really want to delete this review?
        </p>
        <div className={styles.delete__options}>
          <button className={`${styles.delete__btn} ${styles.delete__yes}`}>
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
