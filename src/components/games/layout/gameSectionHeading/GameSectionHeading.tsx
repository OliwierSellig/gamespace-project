import { ChildrenProp } from "../../../../utils/types";
import styles from "./gameSectionHeading.module.scss";

function GameSectionHeading({ children }: ChildrenProp) {
  return <h2 className={styles.heading}>{children}</h2>;
}

export default GameSectionHeading;
