import { ChildrenProp } from "../../../../utils/types/types";
import styles from "./collectionTitle.module.scss";

function CollectionTitle({ children }: ChildrenProp) {
  return <h1 className={styles.title}>{children || "Undefined Collection"}</h1>;
}

export default CollectionTitle;
