import ActivitiesContainer from "../activities/ActivitiesContainer";
import FavouritesContainer from "../favourites/FavouritesContainer";
import DataContainer from "../gameData/DataContainer";
import YearsContainer from "../gameYears/YearsContainer";
import HeroContainer from "../hero/HeroContainer";
import RecentGamesContainer from "../recentGames/RecentGamesContainer";
import ReviewsContainer from "../recentReviews/ReviewsContainer";

function UserOverview() {
  return (
    <>
      <HeroContainer />
      <FavouritesContainer />
      <ActivitiesContainer />
      <ReviewsContainer />
      <DataContainer />
      <YearsContainer />
      <RecentGamesContainer />
    </>
  );
}

export default UserOverview;
