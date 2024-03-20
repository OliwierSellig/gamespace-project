import { SingleGameItem } from "../../../../utils/types/types";
import SaveToCollectionButton from "../../collections/saveToCollectionButton/SaveToCollectionButton";
import UpdateLibraryButton from "../updateLibraryButton/UpdateLibraryButton";
import UpdateWishlistButton from "../updateWishlistFavouritesButton/UpdateWishlistFavouritesButton";
import styles from "./gameActionButtons.module.scss";

type GameActionButtonsProps = {
  game: SingleGameItem;
};

function GameActionButtons({ game }: GameActionButtonsProps) {
  return (
    <nav className={styles.actionBtns}>
      <UpdateLibraryButton game={game} />
      <UpdateWishlistButton game={game} />
      <SaveToCollectionButton game={game} />
    </nav>
  );
}

export default GameActionButtons;
