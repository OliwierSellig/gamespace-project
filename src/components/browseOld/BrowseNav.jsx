"use client";

import { useEffect, useState } from "react";
import { HiMiniChevronLeft } from "react-icons/hi2";
import styles from "./browseNav.module.scss";
import Link from "next/link";
import { API_KEY } from "@/utils/data";

function BrowseNav() {
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
  }, []);

  return (
    <nav className={styles.container}>
      <h3 className={styles.heading}>Browse by:</h3>
      <div className={styles.links}>
        <Link
          href="developers"
          className={`${styles.link} ${styles.link__direct} `}
        >
          Developers
        </Link>
        <Link
          href="genres"
          className={`${styles.link} ${styles.link__direct} `}
        >
          Genres
        </Link>
        <div className={styles.platformsContainer}>
          <button
            className={` ${styles.link} ${styles.link__indirect}`}
            onClick={() => setPlatformsShown((shown) => !shown)}
            aria-label="Show Platforms"
          >
            <span>Platforms</span>
            <HiMiniChevronLeft
              className={`${styles.link__icon} ${
                platformsShown ? styles.link__icon__rotated : ""
              }`}
            />
          </button>
          <nav
            className={`${styles.platformsList} ${
              platformsShown ? styles.platformsList__visible : ""
            }`}
            onClick={() => setPlatformsShown(false)}
          >
            {parentsList.map((platform) => (
              <Link
                href={`platforms?parent=${platform.id}`}
                className={styles.platformsLink}
                key={crypto.randomUUID()}
              >
                {platform.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default BrowseNav;
