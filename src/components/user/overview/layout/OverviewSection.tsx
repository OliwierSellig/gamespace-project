import { ChildrenProp } from "../../../../utils/types";
import styles from "./overviewSection.module.scss";

function OverviewSection({ children }: ChildrenProp) {
  return <section className={styles.container}>{children}</section>;
}

export default OverviewSection;
