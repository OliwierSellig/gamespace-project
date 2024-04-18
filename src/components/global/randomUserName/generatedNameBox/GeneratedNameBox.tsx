import { ReactNode } from "react";
import styles from "./generatedNameBox.module.scss";

type GeneratedNameBoxProps = {
  handleClick: () => void;
  children: ReactNode;
};

function GeneratedNameBox({ handleClick, children }: GeneratedNameBoxProps) {
  return (
    <li>
      <button onClick={handleClick} type="button" className={styles.btn}>
        {children}
      </button>
    </li>
  );
}

export default GeneratedNameBox;
