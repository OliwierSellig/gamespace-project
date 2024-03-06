import UserWishlist from "../../../components/user/wishlist/UserWishlist";

function page({
  searchParams,
}: {
  searchParams: { order: string; page: string };
}) {
  return <UserWishlist orderBy={searchParams.order} page={searchParams.page} />;
}

export default page;
