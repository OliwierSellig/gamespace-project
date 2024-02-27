import LogContainer from "../activities/LogContainer";
import FavouritesSwiper from "../favourites/FavouritesSwiper";
import DataContainer from "../gameData/DataContainer";
import YearsSwiper from "../gameYears/YearsSwiper";
import HeroContainer from "../hero/HeroContainer";
import RecentGameList from "../recentGames/RecentGameList";
import ReviewsRow from "../recentReviews/ReviewsRow";
import ShareContainer from "../share/ShareContainer";
import OverviewSection from "./OverviewSection";
import OverviewVideo from "./OverviewVideo";

function UserOverview() {
  return (
    <>
      <HeroContainer />
      {/* <OverviewVideo /> */}
      <OverviewSection heading="Favourite Games">
        <FavouritesSwiper />
      </OverviewSection>
      <OverviewSection heading="Activities Board">
        <LogContainer />
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
