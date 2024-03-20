import { SingleGameItem } from "../../../../utils/types/types";
import GameActionButtons from "../../actions/gameActionButtons/GameActionButtons";
import GameHeader from "../../header/gameHeader/GameHeader";
import GameRating from "../../rating/gameRating/GameRating";
import WriteReviewButton from "../../review/writeReviewButton/WriteReviewButton";
import GameStores from "../../stores/gameStores/GameStores";
import styles from "./gameAction.module.scss";

type GameActionProps = {
  game: SingleGameItem;
  topYear: string;
  topGenre: string;
};

function GameAction({ game, topGenre, topYear }: GameActionProps) {
  return (
    <div className={styles.container}>
      <GameHeader game={game} />
      <GameActionButtons game={game} />
      <GameRating topGenre={topGenre} topYear={topYear} game={game} />
      <WriteReviewButton game={game} />
      <GameStores game={game} />
    </div>
  );
}

export default GameAction;
