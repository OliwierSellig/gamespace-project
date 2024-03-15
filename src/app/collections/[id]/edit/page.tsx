import UpdateCollection from "../../../../components/collections/collectionView/updateCollection/UpdateCollection";

function page({ params }: { params: { id: string } }) {
  return <UpdateCollection collectionId={params.id} />;
}

export default page;
