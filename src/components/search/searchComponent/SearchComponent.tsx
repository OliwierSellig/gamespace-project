"use client";

import { useGames } from "../../../hooks/useGames";
import { useSearch } from "../../../contexts/SearchContex";
import LoaderWindow from "../../global/loading/loaderWindow/LoaderWindow";
import NoGamesFound from "../noGamesFound/NoGamesFound";
import SearchList from "../searchList/SearchList";

type SearchComponentProps = {
  params: { [key: string]: string };
};

function SearchComponent({ params }: SearchComponentProps) {
  const page = parseInt(params["page"]) || 1;
  const dev = parseInt(params["dev"]);
  const genre = parseInt(params["genre"]);
  const platform = parseInt(params["platforms"]);
  const order = params["order"];
  const { query } = useSearch();

  function setOrder() {
    switch (order) {
      case "rating":
        return "rating";
      case "popularity":
        return "added";
      case "released":
        return "released";
      default:
        return null;
    }
  }

  const { isLoading, games } = useGames({
    page: page,
    developers: [dev],
    genres: [genre],
    platforms: [platform],
    search:
      query.length > 2 ? query.toLocaleLowerCase().replaceAll(" ", "+") : "",
    ordering: { orderBy: setOrder(), reversed: true },
  });

  if (isLoading) return <LoaderWindow height="80vh" />;

  if (!isLoading && (!games?.results || !games?.results?.length))
    return <NoGamesFound />;

  return (
    <>
      <SearchList list={games.results} currentPage={page} count={games.count} />
    </>
  );
}

export default SearchComponent;
