import { ChildrenProp } from "../../../../utils/types/types";
import styles from "./signupSwiperContainer.module.scss";

function SignupSwiperContainer({ children }: ChildrenProp) {
  return <div className={styles.container}>{children}</div>;
}

export default SignupSwiperContainer;
