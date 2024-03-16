import UserLibrary from "../../../../components/user/library/layout/UserLibrary";

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
