import Link from "next/link";
import { SingleGameItem } from "../../../utils/types";
import styles from "./gameStores.module.scss";

type GameStoresProps = {
  game: SingleGameItem;
};

function GameStores({ game }: GameStoresProps) {
  return (
    <div className={styles.buy}>
      <header className={styles.buy__header}>Where to buy:</header>
      <nav className={styles.buy__list}>
        {game.stores &&
          game.stores.map((item) => (
            <Link
              href={item.store?.domain || ""}
              key={item.id}
              className={styles.buy__link}
            >
              {item.store.name}
            </Link>
          ))}
      </nav>
    </div>
  );
}

export default GameStores;
