import { ReactNode } from "react";
import styles from "./scaleButton.module.scss";

type ScaleButtonProps = {
  children: ReactNode;
  handleClick:
};

function ScaleButton({ children }: ScaleButtonProps) {
  return <button className={styles.btn}>{children}</button>;
}

export default ScaleButton;
