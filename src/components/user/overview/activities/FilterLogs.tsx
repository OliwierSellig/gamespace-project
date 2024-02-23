import styles from "./filterLogs.module.scss";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

function FilterLogs() {
  return (
    <button className={styles.btn}>
      <span>Filter</span>
      <HiMiniAdjustmentsHorizontal />
    </button>
  );
}

export default FilterLogs;
