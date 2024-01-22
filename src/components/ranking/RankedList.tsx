import { FetchedGameItem } from "../../utils/types";
import RowList from "./RowList";
import TopRanked from "./TopRanked";
import styles from "./rankedList.module.scss";

type RankedListProps = {
  games: FetchedGameItem[];
};

function RankedList({ games }: RankedListProps) {
  return (
    <div className={styles.container}>
      <TopRanked games={games} />
      <RowList games={games.slice(3)} />
    </div>
  );
}

export default RankedList;
