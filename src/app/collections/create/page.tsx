import StartCollectionContainer from "../../../components/collections/startCollection/StartCollectionContainer";

function page({ searchParams }: { searchParams: { game: string } }) {
  return <StartCollectionContainer gameId={searchParams.game} />;
}

export default page;
