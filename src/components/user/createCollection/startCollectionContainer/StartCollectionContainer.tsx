import CollectionsPropertiesBox from "../../../collections/updateCollectionContainer/CollectionsPropertiesBox";
import UpdateCollectionContainer from "../../../collections/updateCollectionContainer/UpdateCollectionContainer";

function StartCollectionContainer() {
  return (
    <UpdateCollectionContainer returnDest="/user/collections">
      <CollectionsPropertiesBox action={{ type: "add" }} />
    </UpdateCollectionContainer>
  );
}

export default StartCollectionContainer;
