import { fetchGames } from "../../../../lib/games";
import SwiperComponent from "../../../global/SwiperComponent";
import GameLibraryItem from "../../locale/gameLibraryItem/GameLibraryItem";

async function FavouritesSwiper() {
  const games = await fetchGames({});

  return (
    <SwiperComponent
      props={{
        default: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: true,
          loop: true,
        },
        breakpoints: [
          { minWidth: 1024, slidesPerView: 3 },
          { minWidth: 600, slidesPerView: 2 },
        ],
      }}
    >
      {games.results.map((game) => (
        <GameLibraryItem
          key={game.id}
          name={game.name}
          id={game.id}
          cover={game.background_image}
          imageSizes={{
            defalult: { number: 40, unit: "vw" },
            sizes: [
              { maxWidth: 1024, size: { number: 50, unit: "vw" } },
              { maxWidth: 600, size: { number: 95, unit: "vw" } },
            ],
          }}
        />
      ))}
    </SwiperComponent>
  );
}

export default FavouritesSwiper;
