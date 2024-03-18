import ReturnButton from "../returnButton/ReturnButton";
import styles from "./updateCollectionContainer.module.scss";
import { CollectionItemType, SingleGameItem } from "../../../../utils/types";
import CollectionsPropertiesBox from "../collectionPropertiesBox/CollectionsPropertiesBox";

type UpdateCollectionContainerProps = {
  returnDest: string;
  action:
    | { type: "add"; game?: SingleGameItem }
    | { type: "update"; currentCollection: CollectionItemType };
};

function UpdateCollectionContainer({
  returnDest,
  action,
}: UpdateCollectionContainerProps) {
  return (
    <div className={styles.container}>
      <ReturnButton href={returnDest} />
      <CollectionsPropertiesBox action={action} />
    </div>
  );
}

export default UpdateCollectionContainer;
