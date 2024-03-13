import CollectionView from "../../../components/collections/collectionView/CollectionView";

function page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { order: string };
}) {
  return <CollectionView orderBy={searchParams.order || ""} id={params.id} />;
}

export default page;
