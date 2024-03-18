"use client";

import { useUser } from "../../../../contexts/UserContext";
import UpdateCollectionContainer from "../../../global/updateCollectionContainer/updateCollectionContainer/UpdateCollectionContainer";

type UpdateCollectionProps = {
  collectionId: string;
};

function UpdateCollection({ collectionId }: UpdateCollectionProps) {
  const { findCollection } = useUser();

  const currentCollection = findCollection(parseInt(collectionId));

  return (
    <UpdateCollectionContainer
      action={{ type: "update", currentCollection }}
      returnDest={`/collections/${collectionId}`}
    />
  );
}

export default UpdateCollection;
