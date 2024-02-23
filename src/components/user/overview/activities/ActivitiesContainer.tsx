import UserHeading from "../../layout/UserHeading";
import OverviewSection from "../layout/OverviewSection";
import LogContainer from "./LogContainer";

function ActivitiesContainer() {
  return (
    <OverviewSection>
      <UserHeading>Activity Board</UserHeading>
      <LogContainer />
    </OverviewSection>
  );
}

export default ActivitiesContainer;
