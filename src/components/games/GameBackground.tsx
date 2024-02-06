import styles from "./gameBackground.module.scss";
import noGameFound from "../../../public/img/not-found.png";

type GameBackgroundProps = {
  cover: string;
};

function GameBackground({ cover }: GameBackgroundProps) {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(
      0deg,
      rgba(21, 21, 21, 1) 10%,
      rgba(21, 21, 21, 0.6) 100%
    ),
    url("${cover || noGameFound}")`,
      }}
      className={styles.container}
    />
  );
}

export default GameBackground;
