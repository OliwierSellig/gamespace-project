"use client";

import { ReactNode } from "react";
import notFound from "../../../../../public/img/not-found.png";
import { useCollections } from "../../../../contexts/collectionsContext/CollectionsContext";
import GameBackgroundLayout from "../../../global/gameBackgroundLayout/GameBackgroundLayout";
import PageNotFound from "../../../global/pageNotFound/PageNotFound";

type CollectionViewLayoutProps = {
  id: string;
  children: ReactNode;
};

function CollectionViewLayout({ id, children }: CollectionViewLayoutProps) {
  const { findCollection } = useCollections();
  const collection = findCollection(parseInt(id));
  if (!collection) return <PageNotFound />;
  return (
    <GameBackgroundLayout image={collection.games?.at(0)?.cover || notFound}>
      {children}
    </GameBackgroundLayout>
  );
}

export default CollectionViewLayout;
