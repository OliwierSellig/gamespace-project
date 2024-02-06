import { ChildrenProp } from "../../utils/types";
import styles from "./screenshotsSlider.module.scss";

function ScreenshotsSlider({ children }: ChildrenProp) {
  return <div className={styles.container}>{children}</div>;
}

export default ScreenshotsSlider;
