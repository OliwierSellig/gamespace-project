import GameReview from "../../../../components/games/review/GameReview";

function page({ params }: { params: { id: string } }) {
  return <GameReview id={params.id} />;
}

export default page;
