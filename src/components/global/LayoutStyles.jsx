import { useSearch } from "../../contexts/SearchContext";
import styles from "./layoutStyles.module.scss";

function LayoutStyles() {
  const { unSetSingleItemLayout, setSingleItemLayout } = useSearch();

  return (
    <div className={styles.container}>
      <span className={styles.text}>Layout Style:</span>
      <button className={styles.btn} onClick={unSetSingleItemLayout}>
        <img
          className={styles.icon}
          src="/svg/layout-1.svg"
          alt="Select mode 1"
        />
      </button>
      <button className={styles.btn} onClick={setSingleItemLayout}>
        <img
          className={styles.icon}
          src="/svg/layout-2.svg"
          alt="Select mode 2"
        />
      </button>
    </div>
  );
}

export default LayoutStyles;
