import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchGames } from "../../lib/games";
import Configurator from "./Configurator";
import RankedList from "./RankedList";
import { currentDate } from "../../utils/data";

type RankingProps = {
  order: string;
};

async function Ranking({ order }: RankingProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [
      "games",
      {
        dates: {
          fromYear: currentDate.getFullYear() - 1,
          fromMonth: currentDate.getMonth() + 1,
          fromDay: currentDate.getDate(),
          toYear: currentDate.getFullYear(),
          toMonth: currentDate.getMonth() + 1,
          toDay: currentDate.getDate(),
        },
        ordering: {
          orderBy: order === "trending" ? "added" : "rating",
          reversed: true,
        },
      },
    ],
    queryFn: () =>
      fetchGames({
        dates: {
          fromYear: currentDate.getFullYear() - 1,
          fromMonth: currentDate.getMonth() + 1,
          fromDay: currentDate.getDate(),
          toYear: currentDate.getFullYear(),
          toMonth: currentDate.getMonth() + 1,
          toDay: currentDate.getDate(),
        },
        ordering: {
          orderBy: order === "trending" ? "added" : "rating",
          reversed: true,
        },
      }),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Configurator order={order} />
        <RankedList order={order} />
      </HydrationBoundary>
    </>
  );
}

export default Ranking;
