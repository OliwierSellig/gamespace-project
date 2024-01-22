import { HiOutlineDocumentDuplicate, HiOutlinePlus } from "react-icons/hi2";
import { LiaMedalSolid } from "react-icons/lia";
import styles from "./rowContent.module.scss";
import Image from "next/image";
import { FetchedGameItem } from "../../utils/types";
import Link from "next/link";
import MetacriticScore from "./MetacriticScore";
import Rating from "./Rating";
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
              <p className={styles.released}>
                <span className={styles.released__info}>Released: </span>
                <span>{game.released}</span>
              </p>
              <p className={styles.playtime}>
                <span className={styles.playtime__info}>
                  Average Playtime:{" "}
                </span>
                <span>{`${game.playtime} hours`}</span>
              </p>
              <GenreList game={game} />
            </div>
            <div className={styles.col}>
              <Rating game={game} />
              <MetacriticScore game={game} />
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
