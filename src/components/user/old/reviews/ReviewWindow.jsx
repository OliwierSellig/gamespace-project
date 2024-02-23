import { useParams } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import GameReview from "../../global/GameReview";

function ReviewWindow() {
  const { id } = useParams();
  const { checkReviewed } = useUser();

  const reviewedGame = checkReviewed(Number(id));

  return <GameReview game={reviewedGame.game} />;
}

export default ReviewWindow;
