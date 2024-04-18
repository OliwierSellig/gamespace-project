import { HiMiniChevronRight } from "react-icons/hi2";
import styles from "./skipStepButton.module.scss";

type SkipStepButtonProps = {
  handleClick: () => void;
};

function SkipStepButton({ handleClick }: SkipStepButtonProps) {
  return (
    <button type="button" className={styles.btn} onClick={handleClick}>
      <span className={styles.text}>Skip this step</span>
      <HiMiniChevronRight />
    </button>
  );
}

export default SkipStepButton;
