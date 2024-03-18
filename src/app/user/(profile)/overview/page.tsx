import UserOverview from "../../../../components/user/overview/layout/userOverview/UserOverview";

export const metadata = {
  title: "Overview",
  description:
    "Stay on top of your gaming journey with GameSpace's user overview page. Track your favorites, reviews, and collections with ease. Your gaming profile, simplified.",
};

function page({
  searchParams,
}: {
  searchParams: { filterActivities: string };
}) {
  return <UserOverview filterActivities={searchParams.filterActivities} />;
}

export default page;
