import CollectionDescription from "../collectionDescription/CollectionDescription";
import CollectionHeader from "../collectionHeader/CollectionHeader";
import CollectionNav from "../collectionNav/CollectionNav";
import styles from "./collectionInfo.module.scss";
import CollectionReturnButton from "../../layout/collectionReturnButton/CollectionReturnButton";
import { CollectionItemType } from "../../../../utils/types/types";

type CollectionInfoProps = {
  collection: CollectionItemType;
};

function CollectionInfo({ collection }: CollectionInfoProps) {
  return (
    <div className={styles.container}>
      <CollectionReturnButton />
      <div className={styles.row}>
        <CollectionHeader collection={collection} />
        <CollectionNav collection={collection} />
      </div>
      <CollectionDescription>{collection.description}</CollectionDescription>
    </div>
  );
}

export default CollectionInfo;
