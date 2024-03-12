import { BasicItemType } from "../../../utils/types";
import Pagination from "../../global/Pagination";
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
    <>
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
      <Pagination
        padding={{ left: 0, right: 0, bottom: 3.6, top: 3.6 }}
        currentPage={1}
        maxPage={3}
      />
    </>
  );
}

export default CollectionsList;
