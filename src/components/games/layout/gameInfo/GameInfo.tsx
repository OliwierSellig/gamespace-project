import { FetchedGameItem, SingleGameItem } from "../../../../utils/types/types";
import styles from "./gameInfo.module.scss";
import SameSeriesSlider from "../../sameSeries/sameSeriesSlider/SameSeriesSlider";
import GameDetails from "../../details/overview/gameDetials/GameDetails";
import GameAbout from "../../about/gameAbout/GameAbout";

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
