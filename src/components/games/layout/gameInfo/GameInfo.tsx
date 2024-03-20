import { FetchedGameItem, SingleGameItem } from "../../../../utils/types/types";
import GameAbout from "../../about/gameAbout/GameAbout";
import GameDetails from "../../details/overview/gameDetials/GameDetails";
import SameSeriesSlider from "../../sameSeries/sameSeriesSlider/SameSeriesSlider";
import styles from "./gameInfo.module.scss";

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
