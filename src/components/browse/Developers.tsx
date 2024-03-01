import { fetchDevelopers } from "../../lib/developers";
import BrowseList from "./BrowseList";

type DevelopersProps = {
  params: { [key: string]: string };
};

async function Developers({ params }: DevelopersProps) {
  const target =
    !parseInt(params["page"]) || parseInt(params["page"]) < 1
      ? 1
      : parseInt(params["page"]);

  const developers = await fetchDevelopers({
    page: target,
    pageSize: 20,
  });

  return (
    <BrowseList
      type="dev"
      list={developers.results}
      count={developers.count}
      page={target}
    />
  );
}

export default Developers;
