import { ChildrenProp } from "../../../../utils/types/types";
import styles from "./loginInputs.module.scss";

function LoginInputs({ children }: ChildrenProp) {
  return <div className={styles.container}>{children}</div>;
}

export default LoginInputs;
