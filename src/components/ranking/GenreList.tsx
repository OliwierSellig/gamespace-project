import { FetchedGameItem } from "../../utils/types";
import styles from "./genreList.module.scss";

type GenreListProps = { game: FetchedGameItem };

function GenreList({ game }: GenreListProps) {
  return (
    <ul className={styles.genres}>
      {game.genres.slice(0, 2).map((genre) => (
        <li key={genre.id} className={styles.genre}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
