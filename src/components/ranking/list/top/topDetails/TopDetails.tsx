import { IoClose } from "react-icons/io5";
import { FetchedGameItem } from "../../../../../utils/types/types";
import GenreList from "../../../locale/genreList/GenreList";
import MetacriticScore from "../../../locale/metacriticScore/MetacriticScore";
import UpdateGameStateButton from "../../../locale/updateGameStateButton/UpdateGameStateButton";
import ViewDetailsButton from "../../../locale/viewDetailsButton/ViewDetailsButton";
import styles from "./topDetails.module.scss";

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
