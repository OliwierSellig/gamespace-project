import { IoClose } from "react-icons/io5";
import { FetchedGameItem } from "../../../../../../utils/types";
import styles from "./topDetails.module.scss";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import MetacriticScore from "../../../../locale/MetacriticScore";

import GenreList from "../../../../locale/GenreList";
import Button from "../../../../../global/Button";
import UpdateGameStateButton from "../../../../locale/UpdateGameStateButton";
import ViewDetailsButton from "../../../../locale/ViewDetailsButton";

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
        <ViewDetailsButton gameId={game.id} />
        <UpdateGameStateButton type="mini" gameId={game.id} />
      </nav>
    </div>
  );
}

export default TopDetails;
