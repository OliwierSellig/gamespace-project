import GameBackground from "./GameBackground";
import GameAction from "./GameAction";
import {
  fetchGameAchievements,
  fetchGameByID,
  fetchGameScreenshots,
  fetchGames,
  fetchSameSeriesGames,
  findIsTopGenre,
  findIsTopYear,
} from "../../lib/games";
import Pop from "./Pop";
import GameInfo from "./GameInfo";
import Slider from "../global/Slider";
import GameCard from "../global/GameCard";
import ScreenshotsSlider from "./ScreenshotsSlider";
import GameContainer from "./GameContainer";
import GameAchievements from "./GameAchievements";

type GameViewProps = {
  id: string;
};

async function GameView({ id }: GameViewProps) {
  const game = await fetchGameByID(parseInt(id));
  const topGames = await fetchGames({
    genres: [game.genres?.at(0)?.id || null],
    tags: [game.tags?.at(0)?.id || null],
    dates: {
      fromYear: new Date(game?.released).getFullYear() - 1,
      fromMonth: 1,
      fromDay: 1,
      toYear: new Date(game?.released).getFullYear(),
      toMonth: 1,
      toDay: 1,
    },
  });
  const sameSeries = await fetchSameSeriesGames(game?.slug);
  const topYear = await findIsTopYear({
    id: game.id,
    year: new Date(game.released).getFullYear(),
  });
  const topGenre = await findIsTopGenre({
    id: game.id,
    genre: game.genres[0]?.id,
  });
  const screenshots = await fetchGameScreenshots(game.id);
  const achievements = await fetchGameAchievements(game.id);

  return (
    <GameBackground cover={game.background_image_additional}>
      <Pop game={sameSeries.results?.length || topGames.results.slice(0, 10)} />
      <GameContainer>
        <GameAction game={game} topYear={topYear} topGenre={topGenre} />
        <GameInfo
          fetchedSameSeries={Boolean(sameSeries.results?.length)}
          sameSeriesGames={
            sameSeries.results?.length
              ? sameSeries.results
              : topGames.results.slice(0, 10)
          }
          game={game}
        />
      </GameContainer>
      {screenshots.results && <ScreenshotsSlider list={screenshots.results} />}
      {/* {achievements.results && (
        <GameAchievements name={game.name} list={achievements.results} />
      )} */}
    </GameBackground>
  );
}

export default GameView;
