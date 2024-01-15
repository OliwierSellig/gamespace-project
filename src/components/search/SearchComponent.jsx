"use client";

import { loadingStyle } from "@/utils/data";
import { useSearch } from "../../contexts/SearchContext";
import GameList from "../global/GameList";
import SearchInput from "../global/SearchInput";
import TurnBtn from "../global/TurnBtn";
import SearchContainer from "./SearchContainer";
import SearchHeader from "./SearchHeader";
import SingleItemLayout from "./SingleItemLayout";

function SearchComponent() {
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
        {!isLoading && searchList.length > 0 && !inSingleItemLayout && (
          <GameList gameList={searchList} listStyle="list__search">
            <TurnBtn next={false} size={6.4} handleClick={goPrev} />
            <TurnBtn next={true} size={6.4} handleClick={goNext} />
          </GameList>
        )}
      </SearchContainer>
    </>
  );
}

export default SearchComponent;
