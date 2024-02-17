import { HiOutlineFolderPlus } from "react-icons/hi2";
import styles from "./saveToCollectionButton.module.scss";

function SaveToCollectionButton() {
  return (
    <button className={styles.btn}>
      <span>Save to Collection</span>
      <HiOutlineFolderPlus />
    </button>
  );
}

export default SaveToCollectionButton;
