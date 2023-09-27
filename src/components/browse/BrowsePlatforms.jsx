import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useUtility } from "../../contexts/UtilityContext";
import GameCarousel from "../global/GameCarousel";
import styles from "./browsePlatforms.module.scss";

function BrowsePlatforms() {
  const { API_KEY } = useUtility();
  const [searchParams] = useSearchParams();
  const [platformsList, setPlatformsList] = useState([]);
  const [parentName, setParenName] = useState("");

  // ------------------------------------------------
  // Fetching Children Platforms For Paren Platform
  // ------------------------------------------------

  useEffect(() => {
    const id = Number(searchParams.get("parent"));
    async function fetchParents() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
        );
        const data = await res.json();
        const parent = data.results.find(
          (platform) => platform.id === Number(id)
        );
        setPlatformsList(parent.platforms);
        setParenName(parent.name);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchParents();
  }, [searchParams, API_KEY]);

  return (
    <section className={styles.container}>
      <GameCarousel
        list={platformsList}
        heading={`Browsing Platforms: ${parentName}`}
        carouselStyle="carousel__browse"
        cardStyle="carousel__browse"
      ></GameCarousel>
    </section>
  );
}

export default BrowsePlatforms;
