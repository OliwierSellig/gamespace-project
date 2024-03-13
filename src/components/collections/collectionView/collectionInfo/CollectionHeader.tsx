import CollectionAuthor from "./CollectionAuthor";
import CollectionTitle from "./CollectionTitle";
import styles from "./collectionHeader.module.scss";

function CollectionHeader() {
  return (
    <header className={styles.container}>
      <CollectionTitle>My Gaming Collection</CollectionTitle>
      <CollectionAuthor date={new Date()} name="John Sanderson" />
    </header>
  );
}

export default CollectionHeader;
