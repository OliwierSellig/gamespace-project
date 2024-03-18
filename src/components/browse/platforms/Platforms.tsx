import { fetchPlatforms } from "../../../lib/platfroms";
import BrowseList from "../browseList/BrowseList";

type PlatfromsProps = {
  params: { [key: string]: string };
};

async function Platforms({ params }: PlatfromsProps) {
  const target =
    !parseInt(params["page"]) || parseInt(params["page"]) < 1
      ? 1
      : parseInt(params["page"]);

  const platforms = await fetchPlatforms({ page: target, pageSize: 20 });

  return (
    <BrowseList
      type="platform"
      list={platforms.results}
      count={platforms.count}
      page={target}
    />
  );
}

export default Platforms;
