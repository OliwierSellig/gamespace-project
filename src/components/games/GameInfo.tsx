import { FetchedGameItem, SingleGameItem } from "../../utils/types";
import GameCarousel from "../global/GameCarousel";
import styles from "./gameInfo.module.scss";

type GameInfoProps = {
  game: SingleGameItem;
  games: FetchedGameItem[];
};

function GameInfo({ game, games }: GameInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h4 className={styles.about__heading}>About:</h4>
        <p className={styles.about__content}>
          {game.description_raw || "No description avaible"}
        </p>
        <button className={styles.about__more}>Read more</button>
      </div>
      <ul className={styles.details}>
        <li className={styles.details__item}>
          <span className={styles.details__heading}>Platforms</span>
          <span className={styles.details__content}>
            {game.platforms?.map((platforms, i) =>
              i === 0
                ? `${platforms.platform.name}`
                : `, ${platforms.platform.name}`
            ) || "No Platforms"}
          </span>
        </li>
        <li className={styles.details__item}>
          <span className={styles.details__heading}>Metascore</span>
          <span
            className={`${styles.details__content} ${styles.details__meta}`}
          >
            {game.metacritic || "00"}
          </span>
        </li>
        <li className={styles.details__item}>
          <span className={styles.details__heading}>Genre</span>
          <span className={styles.details__content}>
            {game.genres?.map((genre, i) =>
              i === 0 ? `${genre.name}` : `, ${genre.name}`
            ) || "No Genres"}
          </span>
        </li>
        <li className={styles.details__item}>
          <span className={styles.details__heading}>Release Date</span>
          <span className={styles.details__content}>
            {game.released || "Unknown Released Date"}
          </span>
        </li>
        <li className={styles.details__item}>
          <span className={styles.details__heading}>Developer</span>
          <span className={styles.details__content}>
            {game.developers?.at(0).name || "Unknown Developer"}
          </span>
        </li>
        <li className={styles.details__item}>
          <span className={styles.details__heading}>Age Rating</span>
          <span className={styles.details__content}>
            {game.esrb_rating?.name || "No Rating"}
          </span>
        </li>
      </ul>
      <GameCarousel list={games} amount={2} />
    </div>
  );
}

export default GameInfo;
