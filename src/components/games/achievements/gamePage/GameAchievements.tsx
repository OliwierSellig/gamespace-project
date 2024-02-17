import { AchievementResult } from "../../../../utils/types";
import styles from "./gameAchievements.module.scss";
import AchievementsItem from "../achievementsItem/AchievementsItem";
import OpenAchievementsView from "./OpenAchievementsView";

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
        {count > 5 && <OpenAchievementsView id={id} count={count} />}
      </ul>
    </section>
  );
}

export default GameAchievements;