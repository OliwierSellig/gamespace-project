import styles from "./gameActionButtons.module.scss";
import { HiOutlinePlusCircle, HiOutlineBookmark } from "react-icons/hi2";
import Button from "../../global/Button";
import SaveToCollectionButton from "../utils/SaveToCollectionButton";

function GameActionButtons() {
  return (
    <nav className={styles.actionBtns}>
      <Button style={{ name: "scale", shade: "dark" }}>
        <span>Add to my games</span>
        <HiOutlinePlusCircle />
      </Button>
      <Button transition="medium" style={{ name: "fill", shade: "white" }}>
        <span>Add to Wishlist</span>
        <HiOutlineBookmark />
      </Button>
      <SaveToCollectionButton />
    </nav>
  );
}

export default GameActionButtons;
