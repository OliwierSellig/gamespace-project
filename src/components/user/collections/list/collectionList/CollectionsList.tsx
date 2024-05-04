import { CollectionItemType } from "../../../../../utils/types/types";
import EmptyUserList from "../../../../global/emptyUserList/EmptyUserList";
import Pagination from "../../../../global/pagination/Pagination";
import CollectionsCard from "../../card/collectionCard/CollectionsCard";
import styles from "./collectionsList.module.scss";

type CollectionsListProps = {
  list: CollectionItemType[];
  curPage: number;
  maxPage: number;
};

function CollectionsList({ list, curPage, maxPage }: CollectionsListProps) {
  if (!list || !list.length)
    return (
      <EmptyUserList
        button={{
          text: "Create a new Collection",
          navigateTo: "createCollection",
        }}
      >
        You have no collections matching that query
      </EmptyUserList>
    );

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
        currentPage={curPage}
        maxPage={maxPage}
      />
    </>
  );
}

export default CollectionsList;
