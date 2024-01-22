import { LiaMedalSolid } from "react-icons/lia";
import { FetchedGameItem } from "../../utils/types";
import styles from "./topDetails.module.scss";
import Link from "next/link";
import { HiOutlineDocumentDuplicate, HiOutlinePlus } from "react-icons/hi2";
import MetacriticScore from "./MetacriticScore";
import Rating from "./Rating";
import GenreList from "./GenreList";

type TopDetailsProps = {
  game: FetchedGameItem;
};

function TopDetails({ game }: TopDetailsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.released}>
        <span className={styles.released__info}>Released: </span>
        <span>{game.released}</span>
      </p>
      <p className={styles.playtime}>
        <span className={styles.playtime__info}>Average Playtime: </span>
        <span>{`${game.playtime} hours`}</span>
      </p>
      <GenreList game={game} />
      <Rating game={game} />
      <MetacriticScore game={game} />
      <nav className={styles.btns}>
        {" "}
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
