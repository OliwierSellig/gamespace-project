import Image from "next/image";
import styles from "./sameSeriesCard.module.scss";
import notFound from "../../../../../public/img/not-found.png";
import { FetchedGameItem } from "../../../../utils/types";
import Button from "../../../global/Button";

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
      <Button
        href={{ url: `/games/${game.id}` }}
        style={{ name: "opacity", shade: "white" }}
        borderRadius="sm"
        sizeY="md"
        sizeX="sm"
      >
        View Game
      </Button>
    </div>
  );
}

export default SameSeriesCard;
