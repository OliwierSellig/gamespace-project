import styles from "./collectionsNameList.module.scss";
import CollectionsNameListItem from "./item/CollectionsNameListItem";

type CollectionsNameListProps = { list: string[]; query: string };

function CollectionsNameList({ list, query }: CollectionsNameListProps) {
  const filteredList = list.filter((collection) =>
    collection
      .trim()
      .replaceAll(" ", "-")
      .toLowerCase()
      .includes(query.trim().replaceAll(" ", "-").toLowerCase())
  );
  if (!list || !list.length)
    return (
      <p className={styles.empty}>
        You seem to have no collections yet, please start by creating a
        collection.
      </p>
    );

  if (!filteredList.length)
    return (
      <p className={styles.empty}>
        There are no collections matching this query.
      </p>
    );

  return (
    <ul className={styles.list}>
      {filteredList.map((collection, i) => (
        <CollectionsNameListItem key={i} isActive={false}>
          {collection}
        </CollectionsNameListItem>
      ))}
    </ul>
  );
}

export default CollectionsNameList;
