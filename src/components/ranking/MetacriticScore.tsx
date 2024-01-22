import { FetchedGameItem } from "../../utils/types";
import styles from "./metacriticScore.module.scss";

type MetacriticScoreProps = {
  game: FetchedGameItem;
};

function MetacriticScore({ game }: MetacriticScoreProps) {
  return (
    <p className={styles.meta}>
      {game.metacritic ? (
        <>
          <span className={styles.meta__text}>Metacritic score:</span>
          <span
            className={`${styles.meta__score} ${
              styles[
                `meta__score_${
                  game.metacritic >= 75
                    ? "green"
                    : game.metacritic >= 50
                    ? "yellow"
                    : "red"
                }`
              ]
            }`}
          >
            {game.metacritic}
          </span>
        </>
      ) : (
        <span className={styles.null}>No metacritic score</span>
      )}
    </p>
  );
}

export default MetacriticScore;
