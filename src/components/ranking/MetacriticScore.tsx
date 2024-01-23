import styles from "./metacriticScore.module.scss";

type MetacriticScoreProps = {
  score: number | null;
};

function MetacriticScore({ score }: MetacriticScoreProps) {
  return (
    <p className={styles.meta}>
      {score !== null ? (
        <>
          <span className={styles.meta__text}>Metacritic score:</span>
          <span
            className={`${styles.meta__score} ${
              styles[
                `meta__score_${
                  score >= 75 ? "green" : score >= 50 ? "yellow" : "red"
                }`
              ]
            }`}
          >
            {score}
          </span>
        </>
      ) : (
        <span className={styles.null}>No metacritic score</span>
      )}
    </p>
  );
}

export default MetacriticScore;
