import { ChildrenProp } from "../../../../../utils/types/types";
import styles from "./topRankedButtons.module.scss";

function TopRankedButtons({ children }: ChildrenProp) {
  return <nav className={styles.container}>{children}</nav>;
}

export default TopRankedButtons;
