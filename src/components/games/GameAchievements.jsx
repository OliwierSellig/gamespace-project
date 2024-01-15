import styles from "./gameAchievements.module.scss";
import { useEffect, useState } from "react";
import { useGame } from "../../contexts/GameContext";
import { API_KEY } from "@/utils/data";

function GameAchievements() {
  const [achievementList, setAchievementList] = useState([]);
  const { game } = useGame();

  useEffect(() => {
    async function fetchScreenshots() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${game.id}/achievements?key=${API_KEY}`
        );

        const data = await res.json();
        setAchievementList(data.results);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchScreenshots();
  }, [game]);

  return achievementList.length ? (
    <section className={styles.achievements}>
      <h2 className={styles.heading}>{`${game.name} Achievements:`}</h2>
      <ul className={styles.container}>
        {achievementList.slice(0, 6).map((item) => (
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
  ) : null;
}

export default GameAchievements;
