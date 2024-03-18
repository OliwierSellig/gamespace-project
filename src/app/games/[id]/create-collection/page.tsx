import CreateCollectionWithGames from "../../../../components/games/collections/CreateCollectionWithGames";

export const metadata = {
  title: " - Create Collection",
};

function page({ params }: { params: { id: string } }) {
  return <CreateCollectionWithGames id={params.id} />;
}

export default page;
