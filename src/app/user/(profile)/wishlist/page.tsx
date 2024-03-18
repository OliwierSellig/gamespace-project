import UserWishlist from "../../../../components/user/wishlist/UserWishlist";

export const metadata = {
  title: "Wishlist",
  description:
    "Keep track of your gaming dreams with GameSpace's wishlist page. Organize and prioritize your most coveted titles. Your gaming wishlist, ready to fulfill.",
};

function page({
  searchParams,
}: {
  searchParams: { order: string; page: string };
}) {
  return <UserWishlist orderBy={searchParams.order} page={searchParams.page} />;
}

export default page;
