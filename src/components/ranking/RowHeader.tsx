import { HiMiniChevronLeft } from "react-icons/hi2";
import { FetchedGameItem } from "../../utils/types";
import styles from "./rowHeader.module.scss";

type RowHeaderProps = {
  isActive: boolean;
  index: number;
  unSetActive: () => void;
  setActive: () => void;
  game: FetchedGameItem;
};

function RowHeader({
  isActive,
  unSetActive,
  setActive,
  game,
  index,
}: RowHeaderProps) {
  return (
    <button
      className={`${styles.open} ${isActive ? styles.open__active : ""}`}
      onClick={() => {
        if (isActive) unSetActive();
        else setActive();
      }}
    >
      <div className={styles.row}>
        <div className={styles.text}>
          <span className={styles.pos}>{index + 4}th</span>
          <h2 className={styles.name}>{game.name}</h2>
        </div>
        <span className={styles.played}>{`${game.added} played`}</span>
      </div>
      <HiMiniChevronLeft />
    </button>
  );
}

export default RowHeader;
