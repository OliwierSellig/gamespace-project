import { SingleGameItem } from "../../../utils/types";
import styles from "./gameRating.module.scss";

type GameRatingProps = {
  game: SingleGameItem;
  topYear: string;
  topGenre: string;
};

function GameRating({ game, topYear, topGenre }: GameRatingProps) {
  return (
    <div className={styles.rating}>
      <div className={styles.rating__chart}>
        <span className={styles.rating__chart__upper}>
          {game.ratings && game.ratings.length > 0
            ? `${game?.ratings.at(0).title.at(0).toUpperCase()}${game.ratings
                .at(0)
                .title.slice(1)}`
            : `Undefined`}
        </span>
        <span className={styles.rating__chart__lower}>
          {game.reviews_count || `Undefined`} Ratings
        </span>
      </div>
      <div className={styles.rating__chart}>
        <span className={styles.rating__chart__upper}>#{topGenre || "0"}</span>
        <span className={styles.rating__chart__lower}>
          {game.genres?.at(0)?.name || "Genre"}
        </span>
      </div>
      <div className={styles.rating__chart}>
        <span className={styles.rating__chart__upper}>#{topYear || "0"}</span>
        <span className={styles.rating__chart__lower}>
          Top {new Date(game.released)?.getFullYear() || "Year"}
        </span>
      </div>
    </div>
  );
}

export default GameRating;
