import { ChildrenProp } from "../../../utils/types";
import styles from "./userHeading.module.scss";

function UserHeading({ children }: ChildrenProp) {
  return <h2 className={styles.heading}>{children}</h2>;
}

export default UserHeading;
