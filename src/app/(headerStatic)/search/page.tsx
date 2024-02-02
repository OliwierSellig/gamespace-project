import SearchComponent from "../../../components/search/SearchComponent";

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return <SearchComponent params={searchParams} />;
}

export default page;
