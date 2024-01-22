"use client";

import { useRanking } from "../../contexts/RankingContext";
import Slider from "../global/Slider";
import ListDate from "./ListDate";
import DateSelector from "./DateSelector";
import styles from "./rankingNav.module.scss";
import { useParams } from "next/navigation";
import Link from "next/link";

function RankingNav() {
  const { rankedGamesList, checkForSearch } = useRanking();

  const { filter } = useParams();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          <Link
            className={styles.switchBtn}
            href={`/ranking/${filter === "rated" ? "trending" : "rated"}`}
          >
            <span className={styles.switchBtn__text}>
              {filter === "rated" ? "Top Rated" : "Trending"}
            </span>
          </Link>
          &nbsp;Titles
        </h2>
        <DateSelector />
      </header>
      <Slider
        list={rankedGamesList}
        isLoading={rankedGamesList.length}
        sliderStyle={`slider__ranking__${
          filter === "trending" ? "trending" : "rated"
        }`}
        cardStyle="slider__ranking"
      />
      {checkForSearch() && <ListDate />}
    </main>
  );
}

export default RankingNav;
