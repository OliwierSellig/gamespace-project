import UserReviews from "../../../../components/user/reviews/UserReviews";

export const metadata = {
  title: "Reviews",
  description:
    "Revisit your gaming critiques with GameSpace's reviews page. Easily access all your published reviews in one convenient location. Your gaming opinions, at a glance.",
};

function page({
  searchParams,
}: {
  searchParams: { order: string; page: string };
}) {
  return <UserReviews orderBy={searchParams.order} page={searchParams.page} />;
}

export default page;
