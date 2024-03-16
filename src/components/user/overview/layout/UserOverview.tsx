import ActivitiesContainer from "../activities/ActivitiesContainer";
import FavouritesSwiper from "../favourites/FavouritesSwiper";
import DataContainer from "../gameData/DataContainer";
import YearsSwiper from "../gameYears/YearsSwiper";
import HeroContainer from "../hero/HeroContainer";
import RecentGameList from "../recentGames/RecentGameList";
import ReviewsRow from "../recentReviews/ReviewsRow";
import ShareContainer from "../share/ShareContainer";
import OverviewSection from "./OverviewSection";

type UserOvervierwProps = {
  filterActivities: string;
};

function UserOverview({ filterActivities }: UserOvervierwProps) {
  return (
    <>
      <HeroContainer />
      <OverviewSection heading="Favourite Games">
        <FavouritesSwiper />
      </OverviewSection>
      <OverviewSection heading="Activities Board">
        <ActivitiesContainer filterBy={filterActivities} />
      </OverviewSection>
      <OverviewSection heading="Recent Revies">
        <ReviewsRow />
      </OverviewSection>
      <DataContainer />
      <OverviewSection heading="Common Years">
        <YearsSwiper />
      </OverviewSection>
      <OverviewSection heading="Recently Added Games">
        <RecentGameList />
      </OverviewSection>
      <ShareContainer />
    </>
  );
}

export default UserOverview;
