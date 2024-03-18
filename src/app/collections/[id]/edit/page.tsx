import UpdateCollection from "../../../../components/collections/header/updateCollection/UpdateCollection";

function page({ params }: { params: { id: string } }) {
  return <UpdateCollection collectionId={params.id} />;
}

export default page;
