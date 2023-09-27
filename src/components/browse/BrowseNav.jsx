import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUtility } from "../../contexts/UtilityContext";
import styles from "./browseNav.module.scss";

function BrowseNav() {
  const { API_KEY } = useUtility();
  const [platformsShown, setPlatformsShown] = useState(false);
  const [parentsList, setParentsList] = useState([]);

  // ------------------------------------
  // Fetching Parent Platforms
  // ------------------------------------

  useEffect(() => {
    async function fetchParents() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
        );
        const data = await res.json();

        setParentsList(data.results);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchParents();
  }, [API_KEY]);

  return (
    <nav className={styles.container}>
      <h3 className={styles.heading}>Browse by:</h3>
      <div className={styles.links}>
        <NavLink
          to="developers"
          className={`${styles.link} ${styles.link__direct} `}
        >
          Developers
        </NavLink>
        <NavLink
          to="genres"
          className={`${styles.link} ${styles.link__direct} `}
        >
          Genres
        </NavLink>
        <div className={styles.platformsContainer}>
          <button
            className={` ${styles.link} ${styles.link__indirect}`}
            onClick={() => setPlatformsShown((shown) => !shown)}
          >
            <span>Platforms</span>
            <img
              className={`${styles.link__icon} ${
                platformsShown ? styles.link__icon__rotated : ""
              }`}
              src="/svg/arrow-prev.svg"
              alt="Browse Platforms"
            />
          </button>
          <nav
            className={`${styles.platformsList} ${
              platformsShown ? styles.platformsList__visible : ""
            }`}
            onClick={() => setPlatformsShown(false)}
          >
            {parentsList.map((platform) => (
              <NavLink
                to={`platforms?parent=${platform.id}`}
                className={styles.platformsLink}
                key={crypto.randomUUID()}
              >
                {platform.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default BrowseNav;
