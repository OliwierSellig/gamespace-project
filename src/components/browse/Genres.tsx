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

  const query = params["search"] || "";

  const genres = await fetchGenres();

  const activeList = genres.results
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0 + (target - 1) * 20, 20 + (target - 1) * 20);

  return <BrowseList list={activeList} count={genres.count} page={target} />;
}

export default Genres;
