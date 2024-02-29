import { ChildrenProp } from "../../../../utils/types";
import UserBoxLayout from "../userBoxLayout/userBoxLayout";
import styles from "./userSelectContainer.module.scss";

function UserSelectContainer({ children }: ChildrenProp) {
  return (
    <UserBoxLayout>
      <div className={styles.container}>{children}</div>
    </UserBoxLayout>
  );
}

export default UserSelectContainer;
