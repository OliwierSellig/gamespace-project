import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import styles from "./filtersStats.module.scss";

function FiltersStats({ type = "developer" }) {
  const { gamesPlayed, rankList } = useUser();
  const [topList, setTopList] = useState([]);
  const [barFilled, setBarFilled] = useState(0);

  // -----------------------------------------------
  // Getting The Ranked List and Filling The Bar
  // -----------------------------------------------

  useEffect(() => {
    const topFilters = gamesPlayed.map((game) =>
      type === "developer"
        ? game.game.developers?.at(0).name
        : type === "genre"
        ? game.game.genres?.at(0).name
        : new Date(game.game.released).getFullYear()
    );
    if (!topFilters.length) return;
    setTopList(rankList(topFilters));
    setBarFilled(rankList(topFilters).at(0).at(1));
  }, [gamesPlayed, type, rankList]);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Common&nbsp;
        {type === "developer"
          ? "developers"
          : type === "genre"
          ? "genres"
          : "years"}
      </h3>
      <ul className={styles.list}>
        {topList.slice(0, 4).map((item) => (
          <li className={styles.item} key={crypto.randomUUID()}>
            <div className={styles.item__details}>
              <span className={styles.item__name}>{item.at(0)}</span>
              <span className={styles.item__amount}>{item.at(1)} games</span>
            </div>
            <div className={styles.item__bar}>
              <div
                style={{ width: `${(item.at(1) / barFilled) * 100}%` }}
                className={styles.item__bar__filled}
              />
            </div>
          </li>
        ))}
        {!topList.length && (
          <p className={styles.empty}>Add a game to see details...</p>
        )}
      </ul>
    </div>
  );
}

export default FiltersStats;
