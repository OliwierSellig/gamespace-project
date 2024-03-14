import CollectionAuthor from "./author/CollectionAuthor";
import CollectionTitle from "./title/CollectionTitle";
import styles from "./collectionHeader.module.scss";
import { CollectionItemType } from "../../../../../utils/types";

type CollectionHeaderProps = { collection: CollectionItemType };

function CollectionHeader({ collection }: CollectionHeaderProps) {
  return (
    <header className={styles.container}>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionAuthor
        date={collection.creationDate}
        name={collection.author}
      />
    </header>
  );
}

export default CollectionHeader;
