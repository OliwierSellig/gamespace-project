import { IoMdRefresh } from "react-icons/io";
import styles from "./refreshGeneratedName.module.scss";

type RefreshGeneratedNameProps = {
  handleClick: () => void;
};

function RefreshGeneratedName({ handleClick }: RefreshGeneratedNameProps) {
  return (
    <button
      aria-label="Generate new usernames"
      type="button"
      className={styles.btn}
      onClick={handleClick}
    >
      <IoMdRefresh />
    </button>
  );
}

export default RefreshGeneratedName;
