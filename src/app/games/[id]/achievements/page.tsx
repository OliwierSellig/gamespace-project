import AchievementsView from "../../../../components/games/AchievementsView";

function page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) {
  return <AchievementsView page={searchParams["page"] || "1"} id={params.id} />;
}

export default page;
