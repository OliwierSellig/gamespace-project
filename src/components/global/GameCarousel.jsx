import { useState } from "react";

import Card from "./Card";
import TurnBtn from "./TurnBtn";
import styles from "./gameCarousel.module.scss";

function GameCarousel({
  heading = null,
  list = [],
  amount = 3,
  scale = false,
  carouselStyle,
  cardStyle,
}) {
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
    <div
      className={`${styles.carousel} ${
        carouselStyle ? styles[carouselStyle] : ""
      }`}
    >
      {heading && <h3 className={styles.heading}>{heading}</h3>}
      <div className={styles.box}>
        <ul className={styles.container}>
          {!list.length &&
            Array.from({ length: amount }, () => (
              <li className={styles.loading} key={crypto.randomUUID()}>
                Empty Item
              </li>
            ))}

          {carouselStyle === "carousel__browse" &&
            list
              .slice(
                0 + amount * (currentPage - 1),
                amount + amount * (currentPage - 1)
              )
              .map((item) => (
                <Card
                  rsc={item.image_background}
                  title={item.name}
                  details={`Games: ${item.games_count}`}
                  key={crypto.randomUUID()}
                  scale={scale}
                  cardStyle={cardStyle}
                  handleClick={() => {}}
                />
              ))}

          {carouselStyle === "carousel__games" &&
            list
              .slice(
                0 + amount * (currentPage - 1),
                amount + amount * (currentPage - 1)
              )
              .map((item) => (
                <Card
                  rsc={item.background_image}
                  title={item.name}
                  key={crypto.randomUUID()}
                  cardStyle={cardStyle}
                  handleClick={() => {}}
                />
              ))}
        </ul>
        <TurnBtn next={false} handleClick={prevPage} size={4.8} />
        <TurnBtn next={true} handleClick={nextPage} size={4.8} />
      </div>
    </div>
  );
}

export default GameCarousel;
