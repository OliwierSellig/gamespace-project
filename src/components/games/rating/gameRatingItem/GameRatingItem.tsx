import styles from "./gameRatingItem.module.scss";

type GameRatingItem = {
  upperChart: string;
  lowerChart: string;
};

function GameRatingItem({ upperChart, lowerChart }: GameRatingItem) {
  return (
    <li className={styles.chart}>
      <p className={styles.chart__upper}>{upperChart}</p>
      <p className={styles.chart__lower}>{lowerChart}</p>
    </li>
  );
}

export default GameRatingItem;
