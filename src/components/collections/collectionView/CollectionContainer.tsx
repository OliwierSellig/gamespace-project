import styles from "./collectionContainer.module.scss";
import GameBackgroundLayout from "../../global/GameBackgroundLayout";
import background from "../../../../public/img/collection-background.jpg";
import CollectionGames from "./collectionGames/CollectionGames";
import CollectionInfo from "./collectionInfo/CollectionInfo";

type CollectionContainerProps = { orderBy: string; page: string };

function CollectionContainer({ orderBy, page }: CollectionContainerProps) {
  return (
    <GameBackgroundLayout image={background}>
      <div className={styles.container}>
        <CollectionInfo />
        <CollectionGames orderBy={orderBy} page={page} />
      </div>
    </GameBackgroundLayout>
  );
}

export default CollectionContainer;
