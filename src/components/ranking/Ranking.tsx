import { fetchGames } from "../../lib/games";
import Configurator from "./Configurator";
import RankedList from "./RankedList";

type RankingProps = {
  order: string;
};

async function Ranking({ order }: RankingProps) {
  const games = await fetchGames({
    ordering: { orderBy: "added", reversed: true },
    dates: {
      fromDay: 1,
      fromMonth: 1,
      fromYear: 2023,
      toDay: 1,
      toMonth: 12,
      toYear: 2023,
    },
    pageSize: 10,
  });

  return (
    <>
      <Configurator />
      <RankedList games={games} />
    </>
  );
}

export default Ranking;
