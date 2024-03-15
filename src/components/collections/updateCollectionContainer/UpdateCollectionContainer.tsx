import { ChildrenProp } from "../../../utils/types";
import ReturnButton from "./ReturnButton";
import styles from "./updateCollectionContainer.module.scss";

function UpdateCollectionContainer({ children }: ChildrenProp) {
  return (
    <div className={styles.container}>
      <ReturnButton />
      {children}
    </div>
  );
}

export default UpdateCollectionContainer;
