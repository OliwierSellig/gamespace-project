"use client";

import { useGames } from "../../../../hooks/useGames";
import { useRanking } from "../../../../contexts/RankingContext";
import LoaderWindow from "../../../global/loading/loaderWindow/LoaderWindow";
import RankingError from "../rankingError/RankingError";
import RowList from "../rows/rowList/RowList";
import TopRanked from "../top/topRanked/TopRanked";
import styles from "./rankedList.module.scss";

type RankedListProps = {
  order: string;
};

function RankedList({ order }: RankedListProps) {
  const { state } = useRanking();
  const { games, isLoading, isSuccess } = useGames({
    dates: {
      fromYear: state.dateFrom.year,
      fromMonth: state.dateFrom.month + 1,
      fromDay: state.dateFrom.day,
      toYear: state.dateTo.year,
      toMonth: state.dateTo.month + 1,
      toDay: state.dateTo.day,
    },
    ordering: {
      orderBy: order === "trending" ? "added" : "rating",
      reversed: true,
    },
    pageSize: 10,
  });

  if (!isLoading && !isSuccess) return <RankingError />;

  if (isLoading) return <LoaderWindow height="80vw" />;

  if (!isLoading && isSuccess)
    return (
      <div className={styles.container}>
        <TopRanked games={games.results.slice(0, 3)} order={order} />
        <RowList games={games.results.slice(3)} order={order} />
      </div>
    );
}

export default RankedList;
