import { fetchGames } from "../../../../lib/games";
import GameCard from "../../../global/GameCard";
import SwiperComponent from "../../../global/SwiperComponent";
import UserHeading from "../../layout/UserHeading";
import OverviewSection from "../layout/OverviewSection";

async function FavouritesContainer() {
  const games = await fetchGames({});
  return (
    <OverviewSection>
      <UserHeading>Favourite Games</UserHeading>
      <SwiperComponent
        props={{
          default: {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: true,
            loop: true,
          },
        }}
      >
        {games.results.map((game) => (
          <GameCard
            alt={`${game.name} Cover`}
            key={game.id}
            href={`/games/${game.id}`}
            image={game.background_image}
            imageSizes={{ defalult: { number: 40, unit: "vw" } }}
            scales={false}
          >
            <GameCard.Title>{game.name}</GameCard.Title>
            <GameCard.Details>{`${game.genres?.at(0)?.name || ""} ${
              game.released || ""
            }`}</GameCard.Details>
          </GameCard>
        ))}
      </SwiperComponent>
    </OverviewSection>
  );
}

export default FavouritesContainer;
