import EmptyDetails from "../overview/EmptyDetails";
import styles from "./gameDetailsMetascore.module.scss";

type GameDetailsMetascore = {
  metascore: number;
};

function GameDetailsMetascore({ metascore }: GameDetailsMetascore) {
  if (!metascore) return <EmptyDetails>No Meta Score</EmptyDetails>;
  return (
    <span
      className={` ${styles.meta} ${
        styles[
          `meta__${
            metascore >= 75 ? "green" : metascore >= 50 ? "yellow" : "red"
          }`
        ]
      }`}
    >
      {metascore}
    </span>
  );
}

export default GameDetailsMetascore;
