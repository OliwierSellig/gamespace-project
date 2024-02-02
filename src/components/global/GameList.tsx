import GameCard from "./GameCard";
import styles from "./gameList.module.scss";

function GameList({ gameList = [], listStyle = "", children }) {
  console.log(gameList);
  return (
    <div className={styles.container}>
      <ul className={`${styles.list}`}>
        {gameList.map((game) => (
          <GameCard
            image={game.image_background}
            key={game.id}
            alt={`${game.name} cover`}
          >
            <GameCard.Title>{game.name}</GameCard.Title>
            <GameCard.Details>{`${game.genres?.at(0)?.name} ${
              game.released
            }`}</GameCard.Details>
          </GameCard>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
