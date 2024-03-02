import UserWishlist from "../../../components/user/wishlist/layout/UserWishlist";

function page({
  searchParams,
}: {
  searchParams: { order: string; page: string };
}) {
  return <UserWishlist orderBy={searchParams.order} page={searchParams.page} />;
}

export default page;
