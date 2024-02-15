import { fetchGameAchievements, fetchGameByID } from "../../lib/games";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import styles from "./achievementsView.module.scss";
import Pagination from "../global/Pagination";
import FetchPageNotFound from "../global/FetchPageNotFound";
import Link from "next/link";
import AchievementsItem from "./AchievementsItem";

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
      <header className={styles.header}>
        <Link
          className={styles.back}
          href={`/games/${id}`}
          aria-label="Go back to main page"
        >
          <HiMiniArrowSmallLeft />
        </Link>
        <h1 className={styles.heading}>{`${game.name} Achievements`}</h1>
      </header>
      {(!achievements?.results || !achievements?.results?.length) && (
        <FetchPageNotFound />
      )}
      {achievements.results && achievements.results.length > 0 && (
        <div className={styles.box}>
          <ul className={styles.list}>
            {achievements.results.map((item) => (
              <AchievementsItem achievement={item} key={item.id} />
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            maxPage={Math.ceil(achievements.count / ACHIEVEMENTS_PER_PAGE)}
          />
        </div>
      )}
    </div>
  );
}

export default AchievementsView;
