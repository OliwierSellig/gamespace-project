import SearchComponent from "../../../components/search/SearchComponent";
import SearchHeader from "../../../components/search/SearchHeader";
import { SearchProvider } from "../../../contexts/SearchContex";

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <>
      <SearchProvider>
        <SearchHeader params={searchParams} />
        <SearchComponent params={searchParams} />
      </SearchProvider>
    </>
  );
}

export default page;
