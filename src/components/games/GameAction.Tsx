import styles from "./gameAction.module.scss";
import { SingleGameItem } from "../../utils/types";
import GameHeader from "./GameHeader";
import GameActionButtons from "./GameActionButtons";
import GameRating from "./GameRating";
import GameStores from "./GameStores";

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
