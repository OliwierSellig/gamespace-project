"use client";

import { useCollections } from "../../../../contexts/collectionsContext/CollectionsContext";
import UpdateCollectionContainer from "../../../global/updateCollectionContainer/updateCollectionContainer/UpdateCollectionContainer";

type UpdateCollectionProps = {
  collectionId: string;
};

function UpdateCollection({ collectionId }: UpdateCollectionProps) {
  const { findCollection } = useCollections();

  const currentCollection = findCollection(parseInt(collectionId));

  return (
    <UpdateCollectionContainer
      action={{ type: "update", currentCollection }}
      returnDest={`/collections/${collectionId}`}
    />
  );
}

export default UpdateCollection;
