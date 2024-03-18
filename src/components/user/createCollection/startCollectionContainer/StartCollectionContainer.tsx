import UpdateCollectionContainer from "../../../global/updateCollectionContainer/updateCollectionContainer/UpdateCollectionContainer";

function StartCollectionContainer() {
  return (
    <UpdateCollectionContainer
      action={{ type: "add" }}
      returnDest="/user/collections"
    />
  );
}

export default StartCollectionContainer;
