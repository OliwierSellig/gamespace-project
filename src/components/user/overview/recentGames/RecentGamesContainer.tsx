import UserHeading from "../../layout/UserHeading";
import OverviewSection from "../layout/OverviewSection";
import RecentGameList from "./RecentGameList";

function RecentGamesContainer() {
  return (
    <OverviewSection>
      <UserHeading>Revently Added Games</UserHeading>
      <RecentGameList />
    </OverviewSection>
  );
}

export default RecentGamesContainer;
