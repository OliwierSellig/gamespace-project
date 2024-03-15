import GameBackgroundLayout from "../../global/GameBackgroundLayout";
import CollectionsPropertiesBox from "../updateCollectionContainer/CollectionsPropertiesBox";
import backgroundImage from "../../../../public/img/user-background.jpg";
import UpdateCollectionContainer from "../updateCollectionContainer/UpdateCollectionContainer";

function StartCollectionContainer() {
  return (
    <GameBackgroundLayout image={backgroundImage}>
      <UpdateCollectionContainer returnDest="/user/collections">
        <CollectionsPropertiesBox action={{ type: "add" }} />
      </UpdateCollectionContainer>
    </GameBackgroundLayout>
  );
}

export default StartCollectionContainer;
