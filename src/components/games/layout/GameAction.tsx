import styles from "./gameAction.module.scss";
import { SingleGameItem } from "../../../utils/types";
import GameHeader from "../header/GameHeader";
import GameActionButtons from "../actions/GameActionButtons";
import GameStores from "../stores/GameStores";
import GameRating from "../rating/GameRating";

type GameActionProps = {
  game: SingleGameItem;
  topYear: string;
  topGenre: string;
};

function GameAction({ game, topGenre, topYear }: GameActionProps) {
  return (
    <div className={styles.container}>
      <GameHeader game={game} />
      <GameActionButtons>
        <GameRating topGenre={topGenre} topYear={topYear} game={game} />
      </GameActionButtons>
      <GameStores game={game} />
    </div>
  );
}

export default GameAction;
