import { useParams } from "react-router-dom";
import GameReview from "../../global/GameReview";
import { useUser } from "../../../contexts/UserContext";

function ReviewWindow() {
  const { id } = useParams();
  const { checkReviewed } = useUser();
  const reviewedGame = checkReviewed(Number(id));
  return <GameReview game={reviewedGame.game} />;
}

export default ReviewWindow;
