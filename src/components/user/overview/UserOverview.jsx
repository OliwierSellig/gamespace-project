import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import FiltersStats from "./FiltersStats";
import GamesStats from "./GamesStats";
import ShareAccount from "./ShareAccount";
import Slider from "../../global/Slider";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";

function UserOverview() {
  const { gamesPlayed, getFavourites, reviews, collections } = useUser();
  const [, updateState] = useState();

  // ------------------------------------
  // Forcing a Reload
  // ------------------------------------

  useEffect(() => {
    updateState({});
  }, []);

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
        <GamesStats type="played" amount={gamesPlayed.length} />
        <GamesStats type="review" amount={reviews.length} />
        <GamesStats type="collections" amount={collections.length} />
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
