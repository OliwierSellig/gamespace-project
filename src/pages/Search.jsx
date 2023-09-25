import SearchComponent from "../components/search/SearchComponent";
import { SearchProvider } from "../contexts/SearchContext";

function Search() {
  return (
    <>
      <SearchProvider>
        <SearchComponent />
      </SearchProvider>
    </>
  );
}

export default Search;
