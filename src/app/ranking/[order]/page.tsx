import Ranking from "../../../components/ranking/layout/ranking/Ranking";

function page({ params }: { params: { order: string } }) {
  return (
    <>
      <Ranking order={params.order} />
    </>
  );
}

export default page;
