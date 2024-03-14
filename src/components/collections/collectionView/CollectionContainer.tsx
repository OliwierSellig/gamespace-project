import styles from "./collectionContainer.module.scss";
import GameBackgroundLayout from "../../global/GameBackgroundLayout";
import background from "../../../../public/img/collection-background.jpg";
import CollectionGames from "./collectionGames/CollectionGames";
import CollectionInfo from "./collectionInfo/CollectionInfo";
import { CollectionItemType } from "../../../utils/types";

type CollectionContainerProps = {
  orderBy: string;
  page: string;
  collection: CollectionItemType;
};

function CollectionContainer({
  orderBy,
  page,
  collection,
}: CollectionContainerProps) {
  return (
    <GameBackgroundLayout image={background}>
      <div className={styles.container}>
        <CollectionInfo collection={collection} />
        <CollectionGames
          collectionID={collection.id}
          orderBy={orderBy}
          page={page}
        />
      </div>
    </GameBackgroundLayout>
  );
}

export default CollectionContainer;
