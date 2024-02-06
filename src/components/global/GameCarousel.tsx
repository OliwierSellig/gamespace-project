"use client";

import { useState } from "react";
import TurnBtn from "./TurnBtn";
import styles from "./gameCarousel.module.scss";
import GameCard from "./GameCard";
import { FetchedGameItem } from "../../utils/types";

type GameCarouselProps = {
  list: FetchedGameItem[];
  amount?: number;
};

function GameCarousel({ list, amount = 3 }: GameCarouselProps) {
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    if (amount * currentPage >= list.length) return;
    setCurrentPage((page) => page + 1);
  }

  function prevPage() {
    if (currentPage === 1) return;
    setCurrentPage((page) => page - 1);
  }

  return (
    <div className={styles.carousel}>
      <h3 className={styles.heading}>Other games from the series</h3>
      <div className={styles.box}>
        <ul className={styles.container}>
          {list
            .slice(
              0 + amount * (currentPage - 1),
              amount + amount * (currentPage - 1)
            )
            .map((item) => (
              <GameCard
                image={item.background_image}
                imageSizes={{ defalult: { number: 30, unit: "vw" } }}
                key={item.id}
              >
                <GameCard.Title>{item.name}</GameCard.Title>
                <GameCard.Details>{`${item.genres?.at(0)?.name || ""} ${
                  item.released || ""
                }`}</GameCard.Details>
              </GameCard>
            ))}
        </ul>
        <TurnBtn next={false} handleClick={prevPage} size={4.8} />
        <TurnBtn next={true} handleClick={nextPage} size={4.8} />
      </div>
    </div>
  );
}

export default GameCarousel;
