import { HiOutlineDocumentDuplicate, HiOutlinePlus } from "react-icons/hi2";
import styles from "./rowContent.module.scss";
import Image from "next/image";
import { FetchedGameItem } from "../../utils/types";
import Link from "next/link";
import MetacriticScore from "./MetacriticScore";

import GenreList from "./GenreList";

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
              <Link
                href={`/games/${game.id}`}
                className={`${styles.btn} ${styles.btn__details}`}
              >
                <span>Details</span>
                <HiOutlineDocumentDuplicate />
              </Link>
              <button className={`${styles.btn} ${styles.btn__add}`}>
                <span>Add Game</span>
                <HiOutlinePlus />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowContent;
