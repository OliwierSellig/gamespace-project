import { ChildrenProp } from "../../../../../../utils/types/types";
import styles from "./changeSettingsSwiperItem.module.scss";

function ChangeSettingsSwiperItem({ children }: ChildrenProp) {
  return <div className={styles.container}>{children}</div>;
}

export default ChangeSettingsSwiperItem;
