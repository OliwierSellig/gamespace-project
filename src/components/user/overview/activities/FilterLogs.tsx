import styles from "./filterLogs.module.scss";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

function FilterLogs() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <span>Filter</span>
        <HiMiniAdjustmentsHorizontal />
      </button>
    </div>
  );
}

export default FilterLogs;
