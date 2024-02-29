import { FetchedGameItem } from "../../../../utils/types";

type FilteredGamesLibraryList = {
  list: FetchedGameItem[];
  count: number;
  filterBy: string;
};

function FilteredGamesLibraryList({
  list,
  count,
  filterBy,
}: FilteredGamesLibraryList) {
  return <div>Filtered Games</div>;
}

export default FilteredGamesLibraryList;
