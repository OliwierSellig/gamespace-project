import UserReviews from "../../../components/user/reviews/UserReviews";

function page({
  searchParams,
}: {
  searchParams: { order: string; page: string };
}) {
  return <UserReviews orderBy={searchParams.order} page={searchParams.page} />;
}

export default page;
