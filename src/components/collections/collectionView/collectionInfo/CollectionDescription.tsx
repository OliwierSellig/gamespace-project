import { ChildrenProp } from "../../../../utils/types";
import styles from "./collectionDescription.module.scss";

function CollectionDescription({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default CollectionDescription;
