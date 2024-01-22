import Ranking from "../../../../components/ranking/Ranking";

function page({ params }: { params: { order: string } }) {
  return <Ranking order={params.order} />;
}

export default page;
