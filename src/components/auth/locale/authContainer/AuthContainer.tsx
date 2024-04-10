import { ChildrenProp } from "../../../../utils/types/types";
import ReturnButton from "../../../global/returnButton/ReturnButton";
import styles from "./authContainer.module.scss";

function AuthContainer({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <ReturnButton href="/" />
      <div className={styles.box}>{children}</div>
    </div>
  );
}

export default AuthContainer;
