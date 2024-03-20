import Image from "next/image";
import { FetchedGameItem } from "../../../../../utils/types/types";
import GenreList from "../../../locale/genreList/GenreList";
import MetacriticScore from "../../../locale/metacriticScore/MetacriticScore";
import UpdateGameStateButton from "../../../locale/updateGameStateButton/UpdateGameStateButton";
import ViewDetailsButton from "../../../locale/viewDetailsButton/ViewDetailsButton";
import styles from "./rowContent.module.scss";

type RowContentProps = {
  isActive: boolean;
  game: FetchedGameItem;
};

function RowContent({ isActive, game }: RowContentProps) {
  return (
    <div
      className={`${styles.container} ${
        isActive ? styles.container__open : ""
      }`}
    >
      <div className={styles.container__inside}>
        <div className={styles.content}>
          <div className={styles.cover}>
            <Image
              src={game.background_image}
              alt={`${game.name} cover`}
              fill
              sizes="(max-width: 768px) 95vw, (max-width: 900px) 45vw, (max-width: 1440px) 35vw, (max-width: 1800px) 30vw, 560px"
            />
          </div>
          <div className={styles.box}>
            <div className={styles.col}>
              <p className={`${styles.data} ${styles.data__released}`}>
                <span className={styles.data__info}>Released: </span>
                <span>{game.released}</span>
              </p>
              <p className={`${styles.data} ${styles.data__playtime}`}>
                <span className={styles.data__info}>Average Playtime: </span>
                <span>{`${game.playtime} hours`}</span>
              </p>
              <GenreList game={game} />
            </div>
            <div className={styles.meta}>
              <MetacriticScore score={game.metacritic} />
            </div>
            <nav className={styles.btns}>
              <ViewDetailsButton gameId={game.id} />
              <UpdateGameStateButton type="mini" gameId={game.id} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowContent;
