import { HiMiniXMark } from "react-icons/hi2";
import styles from "./returnButton.module.scss";

function ReturnButton() {
  return (
    <button className={styles.btn}>
      <HiMiniXMark />
    </button>
  );
}

export default ReturnButton;
