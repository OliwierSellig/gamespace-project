import { ReactNode } from "react";
import styles from "./topRankedButton.module.scss";

type TopRankedButtonProps = {
  children: ReactNode;
  handleClick: () => void;
  style?: "blue" | "white";
};

function TopRankedButton({
  children,
  handleClick,
  style = "white",
}: TopRankedButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles[`btn__${style}`]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default TopRankedButton;
