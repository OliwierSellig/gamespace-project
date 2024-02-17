import { fetchGameAchievements, fetchGameByID } from "../../../../lib/games";
import styles from "./achievementsView.module.scss";
import AchievementsViewHeader from "./AchievementsViewHeader";
import AchievementsViewList from "./AchievementsViewList";

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
      <AchievementsViewHeader id={id} name={game.name} />
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
