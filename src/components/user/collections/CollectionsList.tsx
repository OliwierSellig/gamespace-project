import { BasicItemType } from "../../../utils/types";
import CollectionsCard from "./card/CollectionsCard";
import styles from "./collectionsList.module.scss";

type CollectionsListProps = {
  list: {
    title: string;
    author: string;
    id: number;
    games: BasicItemType[];
  }[];
};

function CollectionsList({ list }: CollectionsListProps) {
  return (
    <ul className={styles.container}>
      {list.map((collection) => (
        <CollectionsCard
          title={collection.title}
          author={collection.author}
          id={collection.id}
          games={collection.games}
          key={collection.id}
        />
      ))}
    </ul>
  );
}

export default CollectionsList;
