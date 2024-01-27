import Image from "next/image";
import { FetchedGameItem } from "../../utils/types";
import {
  HiOutlinePlus,
  HiOutlineTrophy,
  HiOutlineArrowUpOnSquare,
} from "react-icons/hi2";
import styles from "./topRankedCard.module.scss";
import { useState } from "react";
import TopDetails from "./TopDetails";
import hero from "../../../public/img/hero-background-0.webp";

type TopRankedCardProps = {
  game: FetchedGameItem;
  place: number;
  order: string;
  animTime: number;
};

function TopRankedCard({ game, place, order, animTime }: TopRankedCardProps) {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  return (
    <li
      className={`${styles.container} ${
        styles[`container__anim_${animTime}`]
      } `}
    >
      <div className={styles.cover}>
        <Image
          src={game.background_image || hero}
          alt={`${game.name} cover`}
          fill
          sizes="(max-width: 900px) 95vw, (max-width: 1440px) 45vw, (max-width: 1800px) 30vw, 530px"
        />
      </div>
      <div className={styles.box}>
        <div className={`${styles.medal} ${styles[`medal__${place}`]}`}>
          <HiOutlineTrophy />
        </div>
        <h2 className={styles.name}>{game.name}</h2>
        <p className={styles.played}>
          {order === "trending"
            ? `${game.added} played`
            : `${game.rating} rating`}
        </p>
      </div>
      <nav className={styles.nav}>
        <button
          className={`${styles.btn} ${styles.btn__ext}`}
          onClick={() => setOpenDetails(true)}
        >
          <span>More Info</span>
          <HiOutlineArrowUpOnSquare />
        </button>
        <button className={`${styles.btn} ${styles.btn__add}`}>
          <span>Add Game</span>
          <HiOutlinePlus />
        </button>
      </nav>
      {openDetails && (
        <TopDetails game={game} closeDetails={() => setOpenDetails(false)} />
      )}
    </li>
  );
}

export default TopRankedCard;
