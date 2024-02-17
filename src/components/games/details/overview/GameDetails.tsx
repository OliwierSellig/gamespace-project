import styles from "./gameDetails.module.scss";
import { SingleGameItem } from "../../../../utils/types";
import GameDetailsItem from "./GameDetailsItem";
import GameDetailsPlatforms from "../items/GameDetailsPlatforms";
import GameDetailsMetascore from "../items/GameDetailsMetascore";
import GameDetailsGenre from "../items/GameDetailsGenre";
import GameDetailsReleased from "../items/GameDetailsReleased";
import GameDetailsDevelopers from "../items/GameDetailsDevelopers";
import GameDetailsAgeRating from "../items/GameDetailsAgeRating";

type GameDetailsProps = {
  game: SingleGameItem;
};

function GameDetails({ game }: GameDetailsProps) {
  return (
    <ul className={styles.details}>
      <GameDetailsItem heading="Platforms">
        <GameDetailsPlatforms platforms={game.platforms} />
      </GameDetailsItem>
      <GameDetailsItem heading="Metascore">
        <GameDetailsMetascore metascore={game.metacritic} />
      </GameDetailsItem>
      <GameDetailsItem heading="Genre">
        <GameDetailsGenre genres={game.genres} />
      </GameDetailsItem>
      <GameDetailsItem heading="Release Date">
        <GameDetailsReleased released={game.released} />
      </GameDetailsItem>
      <GameDetailsItem heading="Developer">
        <GameDetailsDevelopers developer={game.developers?.at(0)} />
      </GameDetailsItem>
      <GameDetailsItem heading="Age Rating">
        <GameDetailsAgeRating rating={game.esrb_rating} />
      </GameDetailsItem>
    </ul>
  );
}

export default GameDetails;
