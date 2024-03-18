"use client";

import { useUser } from "../../../../contexts/UserContext";
import CollectionGames from "../../games/collectionGames/CollectionGames";
import CollectionInfo from "../../header/collectionInfo/CollectionInfo";
import styles from "./collectionView.module.scss";

type CollectionViewProps = {
  id: string;
  orderBy: string;
  page: string;
};

function CollectionView({ id, orderBy, page }: CollectionViewProps) {
  const { findCollection } = useUser();
  const collection = findCollection(parseInt(id));
  return (
    <div className={styles.container}>
      <CollectionInfo collection={collection} />
      <CollectionGames
        collectionID={collection.id}
        orderBy={orderBy}
        page={page}
      />
    </div>
  );
}

export default CollectionView;
