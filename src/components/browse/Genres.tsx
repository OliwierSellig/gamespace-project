import BrowseList from "./BrowseList";
import { fetchGenres } from "../../lib/genres";

type GenresProps = {
  params: { [key: string]: string };
};

async function Genres({ params }: GenresProps) {
  const target =
    !parseInt(params["page"]) || parseInt(params["page"]) < 1
      ? 1
      : parseInt(params["page"]);

  const genres = await fetchGenres({ page: target, pageSize: 20 });

  return (
    <BrowseList
      type="genre"
      list={genres.results}
      count={genres.count}
      page={target}
    />
  );
}

export default Genres;
