import ActivitiesContainer from "../activities/ActivitiesContainer";
import FavouritesContainer from "../favourites/FavouritesContainer";
import HeroContainer from "../hero/HeroContainer";
import ReviewsContainer from "../recentReviews/ReviewsContainer";

function UserOverview() {
  return (
    <>
      <HeroContainer />
      <FavouritesContainer />
      <ActivitiesContainer />
      <ReviewsContainer />
    </>
  );
}

export default UserOverview;
