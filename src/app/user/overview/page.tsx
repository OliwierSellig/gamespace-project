import UserOverview from "../../../components/user/overview/layout/UserOverview";

function page({
  searchParams,
}: {
  searchParams: { filterActivities: string };
}) {
  return <UserOverview filterActivities={searchParams.filterActivities} />;
}

export default page;
