import { useSearch } from "../contexts/SearchContext";
import { useUtility } from "../contexts/UtilityContext";
import Header from "../components/global/Header";
import SearchInput from "../components/global/SearchInput";
import Footer from "../components/global/Footer";
import SearchContainer from "../components/search/SearchContainer";
import GameList from "../components/global/GameList";
import SearchHeader from "../components/search/SearchHeader";
import TurnBtn from "../components/global/TurnBtn";
import SingleItemLayout from "../components/search/SingleItemLayout";

function Search() {
  const { loadingStyle } = useUtility();
  const {
    searchList,
    searchQuery,
    isLoading,
    inSingleItemLayout,
    searchingBy,
    setQuery,
    goNext,
    goPrev,
  } = useSearch();

  return (
    <>
      <Header isFixed={false} />
      <SearchInput
        inputStyle="search__all"
        inputValue={searchQuery}
        handleChange={setQuery}
      />
      <SearchContainer>
        <SearchHeader />
        {isLoading && <p style={loadingStyle}>Loading the data...</p>}
        {!isLoading && inSingleItemLayout && (
          <SingleItemLayout
            list={searchQuery.length >= 3 || searchingBy ? searchList : []}
          >
            <TurnBtn next={false} size={5.2} handleClick={goPrev} />
            <TurnBtn next={true} size={5.2} handleClick={goNext} />
          </SingleItemLayout>
        )}
        {!isLoading && !inSingleItemLayout && (
          <GameList gameList={searchList} listStyle="list__search">
            <TurnBtn next={false} size={6.4} handleClick={goPrev} />
            <TurnBtn next={true} size={6.4} handleClick={goNext} />
          </GameList>
        )}
      </SearchContainer>
      <Footer />
    </>
  );
}

export default Search;
