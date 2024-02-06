import { AchievementResult } from "../../utils/types";
import styles from "./gameAchievements.module.scss";

type GameAchievementsProps = {
  list: AchievementResult[];
  name: string;
};

function GameAchievements({ list, name }: GameAchievementsProps) {
  return (
    <section className={styles.achievements}>
      <h2 className={styles.heading}>{`${name} Achievements:`}</h2>
      <ul className={styles.container}>
        {list.slice(0, 6).map((item) => (
          <li className={styles.item} key={crypto.randomUUID()}>
            <img
              className={styles.item__img}
              src={item.image}
              alt={`${item.name} Cover`}
            />
            <div className={styles.item__content}>
              <span
                className={styles.item__percentage}
              >{`${item.percent}%`}</span>
              <span className={styles.item__title}>{item.name}</span>
              <span className={styles.item__description}>
                {item.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GameAchievements;
