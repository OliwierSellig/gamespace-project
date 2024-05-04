import CollectionView from "../../../components/collections/layout/collectionView/CollectionView";

export const metadata = {
  title: "Personal Collection",
  description:
    "Dive into personalized gaming bliss on GameSpace's collection page. Explore a curated selection of games crafted by users. Find your next gaming obsession with ease.",
};

function page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { order: string; page: string };
}) {
  return (
    <CollectionView
      orderBy={searchParams.order || ""}
      id={params.id}
      page={searchParams.page}
    />
  );
}

export default page;
