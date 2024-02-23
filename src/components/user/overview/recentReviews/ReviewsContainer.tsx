import UserHeading from "../../layout/UserHeading";
import OverviewSection from "../layout/OverviewSection";
import ReviewsRow from "./ReviewsRow";

function ReviewsContainer() {
  return (
    <OverviewSection>
      <UserHeading>Recent Reviews</UserHeading>
      <ReviewsRow />
    </OverviewSection>
  );
}

export default ReviewsContainer;
