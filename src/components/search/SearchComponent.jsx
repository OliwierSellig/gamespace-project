import { useSearch } from "../../contexts/SearchContext";
import { useUtility } from "../../contexts/UtilityContext";
import Footer from "../global/Footer";
import GameList from "../global/GameList";
import Header from "../global/Header";
import SearchInput from "../global/SearchInput";
import TurnBtn from "../global/TurnBtn";
import SearchContainer from "./SearchContainer";
import SearchHeader from "./SearchHeader";
import SingleItemLayout from "./SingleItemLayout";

function SearchComponent() {
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

export default SearchComponent;
