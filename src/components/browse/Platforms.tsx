import { fetchPlatforms } from "../../lib/platfroms";
import BrowseList from "./BrowseList";

type PlatfromsProps = {
  params: { [key: string]: string };
};

async function Platforms({ params }: PlatfromsProps) {
  const target =
    !parseInt(params["page"]) || parseInt(params["page"]) < 1
      ? 1
      : parseInt(params["page"]);

  const query = params["search"] || "";

  const platforms = await fetchPlatforms();

  const activeList = platforms.results
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0 + (target - 1) * 20, 20 + (target - 1) * 20);

  return <BrowseList list={activeList} count={platforms.count} page={target} />;
}

export default Platforms;
