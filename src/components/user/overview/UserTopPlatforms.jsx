import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import { useUtility } from "../../../contexts/UtilityContext";
import styles from "./userTopPlatforms.module.scss";

const TOP_PLATFORMS_AMOUNT = 3;

function UserTopPlatforms() {
  const { getPlatformIcon } = useUtility();
  const { gamesPlayed, rankList } = useUser();
  const [platformsRanked, setPlatformsRanked] = useState([]);

  // ------------------------------------
  // Getting the ranked platforms
  // ------------------------------------

  useEffect(() => {
    setPlatformsRanked(rankList(gamesPlayed.map((game) => game.platform.id)));
  }, [gamesPlayed, rankList]);

  return (
    <ul className={styles.platforms}>
      {platformsRanked.slice(0, TOP_PLATFORMS_AMOUNT).map((platform, i) => (
        <li
          className={`${styles.platforms__item} ${
            styles[`platforms__item__${i + 1}`]
          } `}
          key={crypto.randomUUID()}
        >
          <img
            className={styles.platforms__icon}
            src={getPlatformIcon(platform.at(0))}
            alt="First Ranked Platform"
          />
          <span className={styles.platforms__info} tabIndex={0}>
            {platform.at(1)} Games
          </span>
        </li>
      ))}
      {platformsRanked.length < 3 &&
        Array.from(
          { length: TOP_PLATFORMS_AMOUNT - platformsRanked.length },
          () => (
            <li className={styles.empty} key={crypto.randomUUID()}>
              No Platform
            </li>
          )
        )}
    </ul>
  );
}

export default UserTopPlatforms;
