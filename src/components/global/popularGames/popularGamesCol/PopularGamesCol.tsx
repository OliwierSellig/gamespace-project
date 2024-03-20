import GameAddedRow from "../gameAddedRow/GameAddedRow";
import styles from "./popularGamesCol.module.scss";

type PopularGamesCol = {
  gameList: { id?: number; name?: string; added?: number }[];
};

function PopularGamesCol({ gameList }: PopularGamesCol) {
  return (
    <ul className={styles.list}>
      {gameList ? (
        gameList
          .slice(0, 3)
          .map((game) => (
            <GameAddedRow
              key={game.id}
              id={game.id}
              name={game.name}
              count={game.added}
            />
          ))
      ) : (
        <p className={styles.empty}>No popular games</p>
      )}
    </ul>
  );
}

export default PopularGamesCol;
