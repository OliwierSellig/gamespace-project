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
    <>
      <Pop game={topGames} />
      <GameBackground
        cover={game.background_image_additional || game.background_image}
      />
      <GameContainer>
        <GameAction game={game} topYear={topYear} topGenre={topGenre} />
        <GameInfo
          fetchedSameSeries={Boolean(sameSeries?.results)}
          sameSeriesGames={sameSeries?.results || topGames.results.slice(0, 10)}
          game={game}
        />
      </GameContainer>
      {screenshots.results && (
        <ScreenshotsSlider>
          <Slider
            itemSizes={{
              default: 40,
              minWidth: 48,
              maxWidth: 70,
            }}
            gap={2.4}
          >
            {screenshots.results.map((item) => (
              <GameCard
                key={item.id}
                image={item.image}
                imageSizes={{ defalult: { unit: "vw", number: 45 } }}
              />
            ))}
          </Slider>
        </ScreenshotsSlider>
      )}
      {achievements.results && (
        <GameAchievements name={game.name} list={achievements.results} />
      )}
    </>
  );
}

export default GameView;
