"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GameCarousel from "../global/GameCarousel";
import styles from "./browsePlatforms.module.scss";
import { API_KEY } from "@/utils/data";

function BrowsePlatforms() {
  const params = useSearchParams();
  const [platformsList, setPlatformsList] = useState([]);
  const [parentName, setParenName] = useState("");

  // ------------------------------------------------
  // Fetching Children Platforms For Paren Platform
  // ------------------------------------------------

  useEffect(() => {
    const id = Number(params.get("parent"));
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
  }, [params]);

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
