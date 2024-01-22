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
};

function RowItem({ game, index, isActive, setActive, unSetActive }: RowItem) {
  return (
    <li className={styles.container}>
      <RowHeader
        game={game}
        index={index}
        isActive={isActive}
        setActive={setActive}
        unSetActive={unSetActive}
      />
      <RowContent game={game} isActive={isActive} />
    </li>
  );
}

export default RowItem;
