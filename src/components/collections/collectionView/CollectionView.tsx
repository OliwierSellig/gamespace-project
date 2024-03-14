"use client";

import { useUser } from "../../../contexts/UserContext";
import PageNotFound from "../../global/PageNotFound";
import CollectionContainer from "./CollectionContainer";

type CollectionViewProps = {
  id: string;
  orderBy: string;
  page: string;
};

function CollectionView({ id, orderBy, page }: CollectionViewProps) {
  const { findCollection } = useUser();
  const collection = findCollection(parseInt(id));
  if (!collection) return <PageNotFound />;
  return (
    <CollectionContainer
      collection={collection}
      orderBy={orderBy}
      page={page}
    />
  );
}

export default CollectionView;
