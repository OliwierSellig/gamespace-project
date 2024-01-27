import { FetchedGameItem } from "../../utils/types";
import RowHeader from "./RowHeader";
import RowContent from "./RowContent";
import styles from "./rowItem.module.scss";

type RowItem = {
  game: FetchedGameItem;
  index: number;
  isActive: boolean;
  setActive: () => void;
  unSetActive: () => void;
  highlight: string;
  fadeSide: "left" | "right";
};

function RowItem({
  game,
  index,
  isActive,
  setActive,
  unSetActive,
  highlight,
  fadeSide,
}: RowItem) {
  return (
    <li className={`${styles.container} ${styles[`fade__${fadeSide}`]}`}>
      <RowHeader
        game={game}
        index={index}
        isActive={isActive}
        setActive={setActive}
        unSetActive={unSetActive}
        highlight={highlight}
      />
      <RowContent game={game} isActive={isActive} />
    </li>
  );
}

export default RowItem;
