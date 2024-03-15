"use client";

import { useUser } from "../../../../contexts/UserContext";
import CollectionsPropertiesBox from "../../updateCollectionContainer/CollectionsPropertiesBox";
import UpdateCollectionContainer from "../../updateCollectionContainer/UpdateCollectionContainer";

type UpdateCollectionProps = {
  collectionId: string;
};

function UpdateCollection({ collectionId }: UpdateCollectionProps) {
  const { findCollection } = useUser();

  const currentCollection = findCollection(parseInt(collectionId));

  return (
    <UpdateCollectionContainer returnDest={`/collections/${collectionId}`}>
      <CollectionsPropertiesBox
        action={{ type: "update", currentCollection }}
      />
    </UpdateCollectionContainer>
  );
}

export default UpdateCollection;
