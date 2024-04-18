import ActivitiesContainer from "../../activities/activitiesContainer/ActivitiesContainer";
import FavouritesSwiper from "../../favourites/favouritesSwiper/FavouritesSwiper";
import DataContainer from "../../gameData/dataContainer/DataContainer";
import YearsSwiper from "../../gameYears/yearsSwiper/YearsSwiper";
import HeroContainer from "../../hero/heroContainer/HeroContainer";
import RecentGameList from "../../recentGames/recentGamesList/RecentGameList";
import ReviewsRow from "../../recentReviews/reviewsRow/ReviewsRow";
import ShareContainer from "../../share/shareContainer/ShareContainer";
import OverviewSection from "../overviewSetcion/OverviewSection";

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
