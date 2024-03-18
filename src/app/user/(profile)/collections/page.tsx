import UserCollections from "../../../../components/user/collections/userCollections/UserCollections";

export const metadata = {
  title: "Collections",
  description:
    "Explore your personalized gaming world with GameSpace's collections page. Access all your carefully curated game compilations in one convenient hub. Your gaming preferences, beautifully organized.",
};

function page({ searchParams }: { searchParams: { page: string } }) {
  return <UserCollections page={searchParams.page} />;
}

export default page;
