import { ReactNode } from "react";
import styles from "./gameDetailsItem.module.scss";

type GameDetailsItemProps = {
  children: ReactNode;
  heading: string;
};

function GameDetailsItem({ heading, children }: GameDetailsItemProps) {
  return (
    <li className={styles.container}>
      <h3 className={styles.heading}>{heading}</h3>
      {children}
    </li>
  );
}

export default GameDetailsItem;
