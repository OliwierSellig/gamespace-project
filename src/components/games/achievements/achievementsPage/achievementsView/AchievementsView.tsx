import { fetchGameAchievements, fetchGameByID } from "../../../../../lib/games";
import GameViewHeader from "../../../locale/gameViewHeader/GameViewHeader";
import AchievementsViewList from "../achievementsViewList/AchievementsViewList";
import styles from "./achievementsView.module.scss";

const ACHIEVEMENTS_PER_PAGE = 12;

type AchievementsViewProps = {
  id: string;
  page: string;
};

async function AchievementsView({ id, page }: AchievementsViewProps) {
  const currentPage = parseInt(page);
  const game = await fetchGameByID(parseInt(id));
  const achievements = await fetchGameAchievements({
    id: game.id,
    page:
      page && !Number.isNaN(currentPage) && currentPage > 0 ? currentPage : 1,
    pageSize: ACHIEVEMENTS_PER_PAGE,
  });

  return (
    <div className={styles.container}>
      <GameViewHeader id={parseInt(id)}>
        {game.name || "Undefined game"} Achievements
      </GameViewHeader>
      <AchievementsViewList
        list={achievements.results}
        count={achievements.count}
        achievementsPerPage={ACHIEVEMENTS_PER_PAGE}
        currentPage={currentPage}
      />
    </div>
  );
}

export default AchievementsView;
