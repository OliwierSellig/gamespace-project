import { HiMiniChevronRight } from "react-icons/hi2";
import styles from "./skipStepButton.module.scss";

function SkipStepButton() {
  return (
    <button className={styles.btn}>
      <span className={styles.text}>Skip this step</span>
      <HiMiniChevronRight />
    </button>
  );
}

export default SkipStepButton;
