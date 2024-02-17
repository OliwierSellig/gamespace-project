import { HiOutlineFaceFrown } from "react-icons/hi2";
import { SingleGameItem } from "../../../utils/types";
import ReadMore from "./ReadMore";
import styles from "./gameAbout.module.scss";

type GameAboutProps = {
  game: SingleGameItem;
};

function GameAbout({ game }: GameAboutProps) {
  const text = game.description.replace(/<(?:.|\n)*?>/gm, "");
  const DESC_LENGHT = 600;

  return (
    <div className={styles.about}>
      <h2 className={styles.about__heading}>About:</h2>
      {game?.description ? (
        text.length > DESC_LENGHT ? (
          <>
            <p className={styles.about__content}>{`${text
              .slice(0, DESC_LENGHT)
              .trim()}...`}</p>
            <ReadMore game={game} />
          </>
        ) : (
          <p className={styles.about__content}>{text}</p>
        )
      ) : (
        <p className={styles.about__empty}>
          <span>No Description Available</span>
          <HiOutlineFaceFrown />
        </p>
      )}
    </div>
  );
}

export default GameAbout;
