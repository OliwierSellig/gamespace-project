import UserLibrary from "../../../components/user/library/layout/UserLibrary";

function page({
  searchParams,
}: {
  searchParams: { order: string; filter: string };
}) {
  return (
    <UserLibrary filterBy={searchParams.filter} orderBy={searchParams.order} />
  );
}

export default page;
