import { fetchGameByID } from "../../../../lib/games";
import AchievementsViewHeader from "../../locale/gameViewHeader/GameViewHeader";
import UpdateReview from "../updateReview/UpdateReview";
import styles from "./gameReview.module.scss";

type GameReviewProps = {
  id: string;
};

async function GameReview({ id }: GameReviewProps) {
  const game = await fetchGameByID(parseInt(id));

  return (
    <div className={styles.container}>
      <AchievementsViewHeader id={game.id}>
        {game.name || "Undefined game"} Review
      </AchievementsViewHeader>
      <UpdateReview game={game} />
    </div>
  );
}

export default GameReview;
