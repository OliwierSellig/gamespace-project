import { AchievementResult } from "../../utils/types";
import styles from "./gameAchievements.module.scss";
import AchievementsItem from "./AchievementsItem";
import Link from "next/link";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

type GameAchievementsProps = {
  list: AchievementResult[];
  count: number;
  name: string;
  id: string;
};

function GameAchievements({ list, name, count, id }: GameAchievementsProps) {
  return (
    <section className={styles.achievements}>
      <h2 className={styles.heading}>{`${name} Achievements:`}</h2>
      <ul className={styles.container}>
        {list.slice(0, 5).map((item) => (
          <AchievementsItem key={item.id} achievement={item} />
        ))}
        {count > 5 && (
          <Link href={`/games/${id}/achievements`} className={styles.more}>
            <div className={styles.more__icon}>
              <HiMiniEllipsisHorizontal />
            </div>
            <div>
              <p className={styles.more__main}>View all achievements</p>
              <p className={styles.more__sub}>{`${
                count || "Undefined"
              } items`}</p>
            </div>
          </Link>
        )}
      </ul>
    </section>
  );
}

export default GameAchievements;
