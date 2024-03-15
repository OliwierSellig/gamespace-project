import CreateCollectionWithGames from "../../../../components/games/collections/CreateCollectionWithGames";

function page({ params }: { params: { id: string } }) {
  return <CreateCollectionWithGames id={params.id} />;
}

export default page;
