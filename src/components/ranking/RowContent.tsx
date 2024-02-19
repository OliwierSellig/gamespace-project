import { HiOutlineDocumentDuplicate, HiOutlinePlus } from "react-icons/hi2";
import styles from "./rowContent.module.scss";
import Image from "next/image";
import { FetchedGameItem } from "../../utils/types";
import MetacriticScore from "./MetacriticScore";
import GenreList from "./GenreList";
import Button from "../global/Button";

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
              sizes="(max-width: 768px) 95vw, (max-width: 900px) 45vw, (max-width: 1440px) 35vw, (max-width: 1800px) 30vw, 560px"
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
              <Button
                transition="medium"
                href={{ url: `/games/${game.id}` }}
                style={{ name: "fill", shade: "white" }}
              >
                <span>Details</span>
                <HiOutlineDocumentDuplicate />
              </Button>
              <Button
                transition="medium"
                style={{ name: "fill", shade: "blue" }}
              >
                <span>Add Game</span>
                <HiOutlinePlus />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowContent;
