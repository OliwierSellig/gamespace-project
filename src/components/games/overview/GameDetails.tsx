import Link from "next/link";
import styles from "./gameDetails.module.scss";
import { SingleGameItem } from "../../../utils/types";

type GameDetailsProps = {
  game: SingleGameItem;
};

function GameDetails({ game }: GameDetailsProps) {
  return (
    <ul className={styles.details}>
      <li className={styles.details__item}>
        <h3 className={styles.details__heading}>Platforms</h3>
        <nav>
          {game.platforms ? (
            game.platforms.map((item, i) =>
              i === 0 ? (
                <Link
                  className={`${styles.details__content} ${styles.details__link}`}
                  href={`/search?platform=${item.platform.id}`}
                  key={item.platform.id}
                >
                  {item.platform.name}
                </Link>
              ) : (
                <>
                  <span className={styles.details__content}>, </span>
                  <Link
                    className={`${styles.details__content} ${styles.details__link}`}
                    key={item.platform.id}
                    href={`/search?platform=${item.platform.id}`}
                  >
                    {item.platform.name}
                  </Link>
                </>
              )
            )
          ) : (
            <p
              className={`${styles.details__content} ${styles.details__empty}`}
            >
              No Platforms
            </p>
          )}
        </nav>
      </li>
      <li className={styles.details__item}>
        <h3 className={styles.details__heading}>Metascore</h3>
        {game.metacritic ? (
          <span
            className={`${styles.details__content} ${styles.details__meta} ${
              styles[
                `details__meta_${
                  game.metacritic >= 75
                    ? "green"
                    : game.metacritic >= 50
                    ? "yellow"
                    : "red"
                }`
              ]
            }`}
          >
            {game.metacritic}
          </span>
        ) : (
          <span
            className={`${styles.details__content} ${styles.details__empty}`}
          >
            No Meta Score
          </span>
        )}
      </li>
      <li className={styles.details__item}>
        <h3 className={styles.details__heading}>Genre</h3>
        <nav>
          {game.genres ? (
            game.genres.map((item, i) =>
              i === 0 ? (
                <Link
                  className={`${styles.details__content} ${styles.details__link}`}
                  href={`/search?genre=${item.id}`}
                  key={item.id}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <span className={styles.details__content}>, </span>
                  <Link
                    className={`${styles.details__content} ${styles.details__link}`}
                    key={item.id}
                    href={`/search?platform=${item.id}`}
                  >
                    {item.name}
                  </Link>
                </>
              )
            )
          ) : (
            <p
              className={`${styles.details__content} ${styles.details__empty}`}
            >
              No Genres
            </p>
          )}
        </nav>
      </li>
      <li className={styles.details__item}>
        <h3 className={styles.details__heading}>Release Date</h3>
        {game.released ? (
          <p className={styles.details__content}>{game.released}</p>
        ) : (
          <p className={`${styles.details__content} ${styles.details__empty}`}>
            Unknownn Date
          </p>
        )}
      </li>
      <li className={styles.details__item}>
        <h3 className={styles.details__heading}>Developer</h3>
        {game.developers?.at(0) ? (
          <Link
            className={`${styles.details__content} ${styles.details__link}`}
            href={`/search?dev=${game.developers.at(0).id}`}
          >
            {game.developers.at(0).name}
          </Link>
        ) : (
          <p className={`${styles.details__content} ${styles.details__empty}`}>
            No Developer
          </p>
        )}
      </li>
      <li className={styles.details__item}>
        <h3 className={styles.details__heading}>Age Rating</h3>
        {game.esrb_rating ? (
          <p className={styles.details__content}>{game.esrb_rating.name}</p>
        ) : (
          <p className={`${styles.details__content} ${styles.details__empty}`}>
            No Rating
          </p>
        )}
      </li>
    </ul>
  );
}

export default GameDetails;
