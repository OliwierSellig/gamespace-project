import UserCollections from "../../../components/user/collections/UserCollections";

function page({ searchParams }: { searchParams: { page: string } }) {
  return <UserCollections page={searchParams.page} />;
}

export default page;
