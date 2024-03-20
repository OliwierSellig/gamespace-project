import { ChildrenProp } from "../../../utils/types/types";
import styles from "./sectionHeading.module.scss";

function SectionHeading({ children }: ChildrenProp) {
  return <h2 className={styles.heading}>{children}</h2>;
}

export default SectionHeading;
