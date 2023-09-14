import FiltersStats from "./FiltersStats";
import GamesStats from "./GamesStats";
import ShareAccount from "./ShareAccount";
import Slider from "../../global/Slider";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";
import { useUser } from "../../../contexts/UserContext";

function UserOverview() {
  const { gamesPlayed, getFavourites } = useUser();

  return (
    <>
      <UserHeader />
      <Slider
        title="Favourite Games"
        scale={false}
        sliderStyle="slider__fav"
        cardStyle="slider__fav"
        user={true}
        list={getFavourites()}
      />
      <UserStats>
        <GamesStats
          type="played"
          amount={gamesPlayed.length}
          game="Red Dead Redemption 2"
        />
        <GamesStats type="review" amount={7} game="Assasins Creed Valhalla" />
        <GamesStats type="collections" amount={3} game="Terraria" />
      </UserStats>
      <UserStats>
        <FiltersStats type="developer" />
        <FiltersStats type="genre" />
        <FiltersStats type="year" />
      </UserStats>
      <ShareAccount />
    </>
  );
}

export default UserOverview;
