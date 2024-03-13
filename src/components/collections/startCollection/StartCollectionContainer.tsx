import GameBackgroundLayout from "../../global/GameBackgroundLayout";
import CollectionsPropertiesBox from "./CollectionsPropertiesBox";
import ReturnButton from "./ReturnButton";
import styles from "./startCollectionContainer.module.scss";
import backgroundImage from "../../../../public/img/user-background.jpg";

function StartCollectionContainer() {
  return (
    <GameBackgroundLayout image={backgroundImage}>
      <div className={styles.container}>
        <ReturnButton />
        <CollectionsPropertiesBox />
      </div>
    </GameBackgroundLayout>
  );
}

export default StartCollectionContainer;
