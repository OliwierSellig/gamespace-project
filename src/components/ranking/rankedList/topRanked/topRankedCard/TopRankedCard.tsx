import Image from "next/image";
import { FetchedGameItem } from "../../../../../utils/types";
import { HiOutlineTrophy } from "react-icons/hi2";
import styles from "./topRankedCard.module.scss";
import { useState } from "react";
import TopDetails from "./topRankedDetails/TopDetails";
import TopRankedButtons from "./topRankedButtons/TopRankedButtons";
import notFound from "../../../../../../public/img/not-found.png";
import MoreInfoButton from "./topRankedButtons/MoreInfoButton";
import UpdateGameStateButton from "../../../locale/UpdateGameStateButton";

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
          src={game.background_image || notFound}
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
      <TopRankedButtons>
        <MoreInfoButton handleClick={() => setOpenDetails(true)} />
        <UpdateGameStateButton gameId={game.id} />
      </TopRankedButtons>
      {openDetails && (
        <TopDetails game={game} closeDetails={() => setOpenDetails(false)} />
      )}
    </li>
  );
}

export default TopRankedCard;
