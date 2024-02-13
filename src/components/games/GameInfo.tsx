import { FetchedGameItem, SingleGameItem } from "../../utils/types";
import styles from "./gameInfo.module.scss";
import SameSeriesSlider from "./SameSeriesSlider";
import GameDetails from "./GameDetails";
import GameAbout from "./GameAbout";

type GameInfoProps = {
  game: SingleGameItem;
  fetchedSameSeries: boolean;
  sameSeriesGames: FetchedGameItem[];
};

function GameInfo({ game, sameSeriesGames, fetchedSameSeries }: GameInfoProps) {
  return (
    <div className={styles.container}>
      <GameAbout game={game} />
      <GameDetails game={game} />
      <SameSeriesSlider
        list={sameSeriesGames}
        isSameSeries={fetchedSameSeries}
      />
    </div>
  );
}

export default GameInfo;
