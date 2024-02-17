import GameView from "../../../components/games/layout/GameView";

function page({ params }: { params: { id: string } }) {
  return <GameView id={params.id} />;
}

export default page;
