import ActivitiesContainer from "../activities/ActivitiesContainer";
import FavouritesContainer from "../favourites/FavouritesContainer";
import DataContainer from "../gameData/DataContainer";
import HeroContainer from "../hero/HeroContainer";
import ReviewsContainer from "../recentReviews/ReviewsContainer";

function UserOverview() {
  return (
    <>
      <HeroContainer />
      <FavouritesContainer />
      <ActivitiesContainer />
      <ReviewsContainer />
      <DataContainer />
    </>
  );
}

export default UserOverview;
