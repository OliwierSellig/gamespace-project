import { fetchGames } from "../../lib/games";
import { currentDate } from "../../utils/data";
import { fetchGenres } from "../../lib/genres";
import Favourites from "./Favourites";
import Hero from "./Hero";
import PlatformsHome from "./PlatformsHome";
import SliderHome from "./SliderHome";
import GameCard from "../global/GameCard";
import { ImageSizesType } from "../../utils/types";

async function Home() {
  const trending = await fetchGames({
    dates: {
      fromDay: 1,
      fromMonth: 9,
      fromYear: currentDate.getFullYear() - 1,
      toDay: currentDate.getDate(),
      toMonth: currentDate.getMonth() + 1,
      toYear: currentDate.getFullYear(),
    },
    ordering: {
      orderBy: "added",
      reversed: true,
    },
  });

  const classics = await fetchGames({
    ordering: { orderBy: "added", reversed: true },
  });

  const genres = await fetchGenres();

  const homeImageSizes: ImageSizesType = {
    defalult: { number: 25, unit: "vw" },
    sizes: [
      { maxWidth: 2000, size: { number: 30, unit: "vw" } },
      { maxWidth: 1200, size: { number: 40, unit: "vw" } },
      { maxWidth: 900, size: { number: 55, unit: "vw" } },
      { maxWidth: 700, size: { number: 65, unit: "vw" } },
      { maxWidth: 600, size: { number: 75, unit: "vw" } },
      { maxWidth: 400, size: { number: 85, unit: "vw" } },
    ],
  };

  return (
    <>
      <Hero />
      <SliderHome heading={`Trending in ${currentDate.getFullYear()}`}>
        {trending.map((game) => (
          <GameCard
            href={`/games/${game.id}`}
            image={game.background_image}
            key={game.id}
            imageSizes={homeImageSizes}
          >
            <GameCard.Title>{game.name}</GameCard.Title>
            <GameCard.Details>{`${game.genres?.at(0)?.name} ${
              game.released
            }`}</GameCard.Details>
          </GameCard>
        ))}
      </SliderHome>
      <SliderHome heading={`Modern Classics`}>
        {classics.map((game) => (
          <GameCard
            href={`/games/${game.id}`}
            image={game.background_image}
            key={game.id}
            imageSizes={homeImageSizes}
          >
            <GameCard.Title>{game.name}</GameCard.Title>
            <GameCard.Details>{`${game.genres?.at(0)?.name} ${
              game.released
            }`}</GameCard.Details>
          </GameCard>
        ))}
      </SliderHome>
      <Favourites />
      <SliderHome heading="Something specific?">
        {genres.map((genre) => (
          <GameCard
            href={`/search`}
            image={genre.image_background}
            key={genre.id}
            imageSizes={homeImageSizes}
          >
            <GameCard.Title>{genre.name}</GameCard.Title>
            <GameCard.Details>{`${genre.games_count} games`}</GameCard.Details>
          </GameCard>
        ))}
      </SliderHome>
      <PlatformsHome />
    </>
  );
}

export default Home;
