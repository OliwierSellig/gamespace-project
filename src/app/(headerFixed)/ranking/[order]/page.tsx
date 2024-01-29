import Ranking from "../../../../components/ranking/Ranking";

function page({ params }: { params: { order: string } }) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Ranking order={params.order} />
    </>
  );
}

export default page;
