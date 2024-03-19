import { ChildrenProp } from "../../../../utils/types/types";
import styles from "./collectionDescription.module.scss";

function CollectionDescription({ children }: ChildrenProp) {
  return <p className={styles.text}>{children}</p>;
}

export default CollectionDescription;
