import styles from "./gameDetails.module.scss";
import { SingleGameItem } from "../../../../../utils/types/types";
import GameDetailsItem from "../gameDetailsItem/GameDetailsItem";
import GameDetailsPlatforms from "../../items/gameDetailsPlatforms/GameDetailsPlatforms";
import GameDetailsMetascore from "../../items/gameDetailsMetascore/GameDetailsMetascore";
import GameDetailsGenre from "../../items/gameDetailsGenre/GameDetailsGenre";
import GameDetailsReleased from "../../items/gameDetailsReleased/GameDetailsReleased";
import GameDetailsDevelopers from "../../items/gameDetailsDevelopers/GameDetailsDevelopers";
import GameDetailsAgeRating from "../../items/gameDetailsAgeRating/GameDetailsAgeRating";

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
