import { IoMdRefresh } from "react-icons/io";
import styles from "./refreshGeneratedName.module.scss";

function RefreshGeneratedName() {
  return (
    <button
      aria-label="Generate new usernames"
      type="button"
      className={styles.btn}
    >
      <IoMdRefresh />
    </button>
  );
}

export default RefreshGeneratedName;
