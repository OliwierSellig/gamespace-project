import Image from "next/image";
import { FetchedGameItem } from "../../utils/types";
import {
  HiOutlinePlus,
  HiOutlineDocumentDuplicate,
  HiOutlineTrophy,
} from "react-icons/hi2";
import styles from "./topRankedCard.module.scss";
import { useState } from "react";
import TopDetails from "./TopDetails";

type TopRankedCardProps = {
  game: FetchedGameItem;
  place: 1 | 2 | 3;
};

function TopRankedCard({ game, place }: TopRankedCardProps) {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  return (
    <li className={styles.container}>
      <div className={styles.cover}>
        <Image src={game.background_image} alt={`${game.name} cover`} fill />
      </div>
      <div className={styles.box}>
        <div className={`${styles.medal} ${styles[`medal__${place}`]}`}>
          <HiOutlineTrophy />
        </div>
        <h2 className={styles.name}>{game.name}</h2>
        <p className={styles.played}>{`${game.added} played`}</p>
      </div>
      <nav className={styles.nav}>
        <button
          className={`${styles.btn} ${styles.btn__ext}`}
          onClick={() => setOpenDetails(true)}
        >
          <span>Details</span>
          <HiOutlineDocumentDuplicate />
        </button>
        <button className={`${styles.btn} ${styles.btn__add}`}>
          <span>Add Game</span>
          <HiOutlinePlus />
        </button>
      </nav>
      {openDetails && <TopDetails game={game} />}
    </li>
  );
}

export default TopRankedCard;
