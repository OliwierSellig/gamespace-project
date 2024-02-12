import GameBackground from "./GameBackground";
import GameAction from "./GameAction";
import {
  fetchGameAchievements,
  fetchGameByID,
  fetchGameScreenshots,
  fetchGames,
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
import SameSeriesSlider from "./SameSeriesSlider";

type GameViewProps = {
  id: string;
};

async function GameView({ id }: GameViewProps) {
  const games = await fetchGames({});
  const game = await fetchGameByID(parseInt(id));
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
      <Pop game={game} />
      <GameBackground
        cover={game.background_image_additional || game.background_image}
      />
      <GameContainer>
        <GameAction game={game} topYear={topYear} topGenre={topGenre} />
        <GameInfo games={games.results} game={game} />
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

      <SameSeriesSlider list={games.results} />
    </>
  );
}

export default GameView;
