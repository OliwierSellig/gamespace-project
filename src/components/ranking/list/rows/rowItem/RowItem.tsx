import { FetchedGameItem } from "../../../../../utils/types/types";
import RowContent from "../rowContent/RowContent";
import RowHeader from "../rowHeader/RowHeader";
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
