import { LiaMedalSolid } from "react-icons/lia";
import { FetchedGameItem } from "../../utils/types";
import styles from "./rating.module.scss";

type RatingProps = { game: FetchedGameItem };

function Rating({ game }: RatingProps) {
  return (
    <div className={styles.rating}>
      {game.ratings?.at(0)?.title ? (
        <>
          <p className={styles.rating__name}>
            <span>{`${game.ratings
              .at(0)
              .title.at(0)
              .toUpperCase()}${game.ratings.at(0).title.slice(1)}`}</span>
            <LiaMedalSolid />
          </p>
          <p className={styles.rating__amount}>{game.ratings_count} ranked</p>
        </>
      ) : (
        <p className={styles.null}>No rating</p>
      )}
    </div>
  );
}

export default Rating;
