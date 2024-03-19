import { ChildrenProp } from "../../../../../utils/types/types";
import styles from "./emptyDetails.module.scss";

function EmptyDetails({ children }: ChildrenProp) {
  return <p className={styles.text}>{children}</p>;
}

export default EmptyDetails;
