import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import styles from "./turnBtn.module.scss";

function TurnBtn({ next = false, size = 4, user = false, handleClick }) {
  return (
    <button
      onClick={handleClick}
      aria-label={next ? "See next" : " See Previous"}
      className={`${styles.btn} ${
        user
          ? next
            ? styles.next__user
            : styles.prev__user
          : next
            ? styles.next
            : styles.prev
      } ${user ? styles.user : ""} `}
    >
      {next ? (
        <HiMiniChevronRight
          style={{ fill: "#fff", width: `${size}rem`, height: `${size}rem` }}
        />
      ) : (
        <HiMiniChevronLeft
          style={{ fill: "#fff", width: `${size}rem`, height: `${size}rem` }}
        />
      )}
    </button>
  );
}

export default TurnBtn;
