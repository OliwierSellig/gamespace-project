import ActivitiesContainer from "../activities/ActivitiesContainer";
import FavouritesContainer from "../favourites/FavouritesContainer";
import HeroContainer from "../hero/HeroContainer";

function UserOverview() {
  return (
    <>
      <HeroContainer />
      <FavouritesContainer />
      <ActivitiesContainer />
    </>
  );
}

export default UserOverview;
