import GameBackgroundLayout from "../../global/GameBackgroundLayout";
import CollectionsPropertiesBox from "./CollectionsPropertiesBox";
import ReturnButton from "./ReturnButton";
import styles from "./startCollectionContainer.module.scss";
import backgroundImage from "../../../../public/img/user-background.jpg";
import { fetchGameByID } from "../../../lib/games";

type StartCollectionContainerProps = { gameId: string };

async function StartCollectionContainer({
  gameId,
}: StartCollectionContainerProps) {
  const game =
    !isNaN(parseInt(gameId)) && parseInt(gameId) >= 0
      ? await fetchGameByID(parseInt(gameId))
      : null;

  return (
    <GameBackgroundLayout image={backgroundImage}>
      <div className={styles.container}>
        <ReturnButton />
        <CollectionsPropertiesBox game={game} />
      </div>
    </GameBackgroundLayout>
  );
}

export default StartCollectionContainer;
