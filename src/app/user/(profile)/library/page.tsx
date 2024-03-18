import UserLibrary from "../../../../components/user/library/layout/UserLibrary";

export const metadata = {
  title: "Library",
  description:
    "Explore your gaming world with GameSpace's user library page. Access all your favorite titles in one place. Your gaming collection, at your fingertips.",
};

function page({
  searchParams,
}: {
  searchParams: { order: string; filter: string; page: string };
}) {
  return (
    <UserLibrary
      filterBy={searchParams.filter}
      orderBy={searchParams.order}
      page={searchParams.page}
    />
  );
}

export default page;
