import { IoClose } from "react-icons/io5";
import { FetchedGameItem } from "../../utils/types";
import styles from "./topDetails.module.scss";
import Link from "next/link";
import { HiOutlineDocumentDuplicate, HiOutlinePlus } from "react-icons/hi2";
import MetacriticScore from "./MetacriticScore";

import GenreList from "./GenreList";

type TopDetailsProps = {
  game: FetchedGameItem;
  closeDetails: () => void;
};

function TopDetails({ game, closeDetails }: TopDetailsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeDetails}>
        <IoClose />
      </button>
      <p className={`${styles.data} ${styles.data__released}`}>
        <span className={styles.data__info}>Released: </span>
        <span>{game.released}</span>
      </p>
      <p className={`${styles.data} ${styles.data__playtime}`}>
        <span className={styles.data__info}>Average Playtime: </span>
        <span>{`${game.playtime} hours`}</span>
      </p>
      <GenreList game={game} />
      <div className={styles.box}>
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
  );
}

export default TopDetails;
