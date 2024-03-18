import GameReview from "../../../../components/games/review/GameReview";

export const metadata = {
  title: " - Review",
};

function page({ params }: { params: { id: string } }) {
  return <GameReview id={params.id} />;
}

export default page;
