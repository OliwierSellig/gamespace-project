import CollectionView from "../../../components/collections/layout/collectionView/CollectionView";

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
