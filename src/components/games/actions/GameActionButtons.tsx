import styles from "./gameActionButtons.module.scss";
import SaveToCollectionButton from "../utils/SaveToCollectionButton";
import { SingleGameItem } from "../../../utils/types";
import UpdateLibraryButton from "./UpdateLibraryButton";
import UpdateWishlistButton from "./UpdateWishlistButton";

type GameActionButtonsProps = {
  game: SingleGameItem;
};

function GameActionButtons({ game }: GameActionButtonsProps) {
  return (
    <nav className={styles.actionBtns}>
      <UpdateLibraryButton game={game} />
      <UpdateWishlistButton game={game} />
      <SaveToCollectionButton />
    </nav>
  );
}

export default GameActionButtons;
