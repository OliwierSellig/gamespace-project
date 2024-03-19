import { useUser } from "../../../../contexts/UserContext";
import { BasicItemType } from "../../../../utils/types/types";
import styles from "./collectionsNameList.module.scss";
import CollectionsNameListItem from "./item/CollectionsNameListItem";

type CollectionsNameListProps = { query: string; game: BasicItemType };

function CollectionsNameList({ query, game }: CollectionsNameListProps) {
  const { state, checkGameInCollection, updateCollection } = useUser();
  const { collections } = state;
  const sortedCollection = [...collections].sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
  );
  const filteredList = sortedCollection.filter((collection) =>
    collection.title
      .trim()
      .replaceAll(" ", "-")
      .toLowerCase()
      .includes(query.trim().replaceAll(" ", "-").toLowerCase())
  );

  function toggleGameInCollection(game: BasicItemType, collectionID: number) {
    const inCollection = checkGameInCollection(game.id, collectionID);
    updateCollection(
      inCollection
        ? { type: "removeGame", gameID: game.id }
        : { type: "addGame", game: game },
      collectionID
    );
  }

  if (!collections || !collections.length)
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
        <CollectionsNameListItem
          handleClick={() => toggleGameInCollection(game, collection.id)}
          key={i}
          isActive={checkGameInCollection(game.id, collection.id)}
        >
          {collection.title}
        </CollectionsNameListItem>
      ))}
    </ul>
  );
}

export default CollectionsNameList;
