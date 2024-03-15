import { ReactNode } from "react";
import CollectionViewLayout from "../../../components/collections/collectionView/CollectionViewLayout";

function layout({
  params,
  children,
}: {
  params: { id: string };
  children: ReactNode;
}) {
  return <CollectionViewLayout id={params.id}>{children}</CollectionViewLayout>;
}

export default layout;
