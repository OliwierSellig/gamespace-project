import GameView from "../../../components/games/overview/GameView";

function page({ params }: { params: { id: string } }) {
  return <GameView id={params.id} />;
}

export default page;
