import { ChildrenProp } from "../../../../../utils/types";
import styles from "./overviewSectionContainer.module.scss";

function OverviewSectionContainer({ children }: ChildrenProp) {
  return <section className={styles.container}>{children}</section>;
}

export default OverviewSectionContainer;
