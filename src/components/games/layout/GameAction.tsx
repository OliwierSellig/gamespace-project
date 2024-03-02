import styles from "./gameAction.module.scss";
import { SingleGameItem } from "../../../utils/types";
import GameHeader from "../header/GameHeader";
import GameActionButtons from "../actions/GameActionButtons";
import GameStores from "../stores/GameStores";
import GameRating from "../rating/GameRating";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Button from "../../global/Button";

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
      <Button
        positionSelf={{ type: "align", pos: "center" }}
        sizeX="xl"
        sizeY="md"
        href={{ url: "/reviews" }}
        fontWeight={400}
        borderRadius="md"
        additionalStyle={{ marginBottom: "4.2rem" }}
      >
        <span>Write a review</span>
        <HiOutlinePencilSquare />
      </Button>
      <GameStores game={game} />
    </div>
  );
}

export default GameAction;
