import GameReview from "../../../../components/games/review/gameReview/GameReview";

export const metadata = {
  title: " - Review",
};

function Page({ params }: { params: { id: string } }) {
  return <GameReview id={params.id} />;
}

export default Page;
