"use client";

// import { useState } from "react";
import styles from "./gamesCarousel.module.scss";
import { FetchedGameItem } from "../../utils/types";

import GameCard from "../global/GameCard";

type GamesCarouselProps = {
  gamesList: FetchedGameItem[];
};

function GamesCarousel({ gamesList }: GamesCarouselProps) {
  //   const [page, setPage] = useState<number>(0);

  return (
    <div className={styles.carousel}>
      <p className={styles.heading}>Other games from the series</p>
      <div className={styles.row}>
        <div className={styles.box}>
          <nav className={styles.container}>
            {gamesList.map((game) => (
              <GameCard
                key={game.id}
                image={game.background_image}
                imageSizes={{ defalult: { unit: "vw", number: 30 } }}
              >
                <GameCard.Title>{game.name}</GameCard.Title>
                <GameCard.Details>{`${game.genres?.at(0)?.name || ""} ${
                  game.released || ""
                }`}</GameCard.Details>
              </GameCard>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default GamesCarousel;
