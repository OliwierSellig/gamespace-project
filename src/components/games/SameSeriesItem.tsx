import { FetchedGameItem } from "../../utils/types";
import styles from "./sameSeriesItem.module.scss";

type SameSeriesItemProps = {
  game: FetchedGameItem;
};

function SameSeriesItem() {
  return <li className={styles.container}></li>;
}

export default SameSeriesItem;
