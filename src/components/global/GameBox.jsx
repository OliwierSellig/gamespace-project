import styles from "./gameBox.module.scss";

function GameBox({
  rsc,
  title,
  released,
  played,
  rating,
  ratedAmount,
  meta,
  handleClick,
}) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={rsc} alt="Game Cover" />
      <div className={styles.content}>
        <div className={styles.boxLeft}>
          <span className={styles.title}>{title}</span>
          <span className={styles.released}>{released}</span>
          <span className={styles.played}>
            Marked as played by&nbsp;
            <span className={styles.played__number}>{played}</span>&nbsp;people!
          </span>
          <span className={styles.ratings}>
            {ratedAmount} Rated: {rating}/5
          </span>
        </div>
        <div className={styles.metacritics}>
          Metacritics&nbsp;
          <span className={styles.score}>{meta}</span>
        </div>
      </div>
      <button className={styles.viewBtn} onClick={handleClick}>
        View Game
      </button>
    </div>
  );
}

export default GameBox;
