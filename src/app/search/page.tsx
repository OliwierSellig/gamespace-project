import SearchComponent from "../../components/search/searchComponent/SearchComponent";
import SearchHeader from "../../components/search/searchHeader/SearchHeader";
import { SearchProvider } from "../../contexts/SearchContex";

export const metadata = {
  title: "Search Games",
  description:
    "Find your perfect game on GameSpace's search page. Simply enter your query and discover a world of gaming possibilities. Your next favorite awaits!",
};

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
