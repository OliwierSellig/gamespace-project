import { ChildrenProp } from "../../../../utils/types";
import styles from "./userGamesList.module.scss";

function UserGamesList({ children }: ChildrenProp) {
  return <ul className={styles.container}>{children}</ul>;
}

export default UserGamesList;
