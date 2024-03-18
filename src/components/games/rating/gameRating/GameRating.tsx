import { upperCaseFirstLetter } from "../../../../utils/functions";
import { SingleGameItem } from "../../../../utils/types";
import GameRatingItem from "../gameRatingItem/GameRatingItem";
import styles from "./gameRating.module.scss";

type GameRatingProps = {
  game: SingleGameItem;
  topYear: string;
  topGenre: string;
};

function GameRating({ game, topYear, topGenre }: GameRatingProps) {
  return (
    <ul className={styles.rating}>
      <GameRatingItem
        upperChart={
          game.ratings && game.ratings.length
            ? upperCaseFirstLetter(game.ratings.at(0).title)
            : "Undiefined"
        }
        lowerChart={`${game.reviews_count || `Undefined`} Ratings`}
      />
      <GameRatingItem
        upperChart={`#${topGenre || "+40"} `}
        lowerChart={game.genres?.at(0)?.name || "Undefined"}
      />
      <GameRatingItem
        upperChart={`#${topYear || "+40"} `}
        lowerChart={
          game.released
            ? `Top ${new Date(game.released).getFullYear()}`
            : "Undefined"
        }
      />
    </ul>
  );
}

export default GameRating;
