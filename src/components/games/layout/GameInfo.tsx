import { FetchedGameItem, SingleGameItem } from "../../../utils/types";
import styles from "./gameInfo.module.scss";
import SameSeriesSlider from "../sameSeries/SameSeriesSlider";
import GameDetails from "../details/overview/GameDetails";
import GameAbout from "../about/GameAbout";

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
