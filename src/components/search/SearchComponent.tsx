import { fetchGames } from "../../lib/games";
import SearchList from "./SearchList";

type SearchComponentProps = {
  params: { [key: string]: string };
};

async function SearchComponent({ params }: SearchComponentProps) {
  const page = parseInt(params["page"]) || 1;
  const dev = parseInt(params["dev"]);
  const genre = parseInt(params["genre"]);
  const platform = parseInt(params["platforms"]);
  const query = params["query"];

  const games = await fetchGames({
    page: page,
    developers: [dev],
    genres: [genre],
    platforms: [platform],
    search: query,
  });

  console.log(games);

  return (
    <>
      <SearchList list={games.results} currentPage={page} count={games.count} />
    </>
  );
}

export default SearchComponent;
