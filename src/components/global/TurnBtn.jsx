import styles from "./turnBtn.module.scss";

function TurnBtn({ next = false, size = 4, user = false, handleClick }) {
  return (
    <button
      onClick={handleClick}
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
      <img
        style={{ width: `${size}rem`, height: `${size}rem` }}
        src={next ? "/svg/arrow-next.svg" : "/svg/arrow-prev.svg"}
        alt={next ? "See Next" : "See Previous"}
      />
    </button>
  );
}

export default TurnBtn;
