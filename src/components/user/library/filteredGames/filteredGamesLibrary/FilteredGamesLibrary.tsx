import { useUser } from "../../../../../contexts/UserContext";
import FilteredGamesLibraryList from "../filteredGamesLibraryList/FilteredGamesLibraryList";

type FilteredGamesLibraryProps = {
  page: string;
  query: string;
  resultsPerPage?: number;
  filterBy: string;
};

function FilteredGamesLibrary({
  page,
  query,
  resultsPerPage = 4,
  filterBy,
}: FilteredGamesLibraryProps) {
  const { filterLibraryBy } = useUser();
  const list = filterLibraryBy(filterBy);
  const filteredList = list.filter((item) =>
    item.name
      .replaceAll(" ", "")
      .toLowerCase()
      .includes(query.replaceAll(" ", "").toLowerCase())
  );
  const maxPage = Math.ceil(filteredList.length / resultsPerPage);
  const curPage =
    page && parseInt(page) > 0 && parseInt(page) <= maxPage
      ? parseInt(page)
      : 1;

  const filteredQueryGames = filteredList.slice(
    (curPage - 1) * resultsPerPage,
    curPage * resultsPerPage
  );

  console.log(filteredQueryGames);

  return (
    <FilteredGamesLibraryList
      curPage={curPage}
      maxPage={maxPage}
      list={filteredQueryGames}
    />
  );
}

export default FilteredGamesLibrary;
