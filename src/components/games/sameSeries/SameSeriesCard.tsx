import Image from "next/image";
import styles from "./sameSeriesCard.module.scss";
import Link from "next/link";
import notFound from "../../../../public/img/not-found.png";
import { FetchedGameItem } from "../../../utils/types";

type SameSeriesCard = {
  game: FetchedGameItem;
};

function SameSeriesCard({ game }: SameSeriesCard) {
  return (
    <div className={styles.container}>
      <Image
        src={game.background_image || notFound}
        fill
        alt={`${game.name || "Undefined"} Cover`}
        sizes="(max-width: 480px) 90vw (max-width: 1200px) 45vw, 22vw"
      />
      <h3 className={styles.heading}>{game.name || "Undefined Game"}</h3>
      <Link className={styles.link} href={`/games/${game.id}`}>
        View Game
      </Link>
    </div>
  );
}

export default SameSeriesCard;
