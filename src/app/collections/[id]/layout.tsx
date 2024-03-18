import { ReactNode } from "react";
import CollectionViewLayout from "../../../components/collections/collectionView/CollectionViewLayout";

export const metadata = {
  title: "Personal Collection",
  description:
    "Dive into personalized gaming bliss on GameSpace's collection page. Explore a curated selection of games crafted by users. Find your next gaming obsession with ease.",
};

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
