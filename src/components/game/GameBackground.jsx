import { useGame } from "../../contexts/GameContext";
import styles from "./gameBackground.module.scss";

function GameBackground() {
  const { game } = useGame();

  return (
    <section
      style={{
        backgroundImage: game.background_image_additional
          ? `linear-gradient(
      0deg,
      rgba(21, 21, 21, 1) 10%,
      rgba(21, 21, 21, 0.6) 100%
    ),
    url("${game.background_image_additional}")`
          : "",
      }}
      className={styles.container}
    />
  );
}

export default GameBackground;
