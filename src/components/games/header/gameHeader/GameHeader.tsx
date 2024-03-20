import Image from "next/image";
import { SingleGameItem } from "../../../../utils/types/types";
import notFound from "./../../../../../public/img/not-found.png";
import styles from "./gameHeader.module.scss";

type GameHeaderProps = { game: SingleGameItem };

function GameHeader({ game }: GameHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.cover}>
        <Image
          src={`${game?.background_image}` || notFound}
          alt={`${game?.name || "Untitled Game"} Cover`}
          fill
          sizes="40vw"
        />
      </div>
      <p className={styles.smallDetails}>
        {game.released || "Unknown Release Date"} - Average Playtime:{" "}
        {game.playtime ? `${game.playtime} hours` : "Not defined"}
      </p>
      <h1 className={styles.title}>{game?.name || "Untitled Game"}</h1>
    </header>
  );
}

export default GameHeader;
