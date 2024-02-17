import styles from "./gameActionButtons.module.scss";
import { HiOutlinePlusCircle, HiOutlineBookmark } from "react-icons/hi2";
import Button from "../../global/Button";
import SaveToCollectionButton from "../utils/SaveToCollectionButton";

function GameActionButtons() {
  return (
    <nav className={styles.actionBtns}>
      <Button style="scale">
        <span>Add to my games</span>
        <HiOutlinePlusCircle />
      </Button>
      <Button transition="long" style="fill">
        <span>Add to Wishlist</span>
        <HiOutlineBookmark />
      </Button>
      <SaveToCollectionButton />
    </nav>
  );
}

export default GameActionButtons;
