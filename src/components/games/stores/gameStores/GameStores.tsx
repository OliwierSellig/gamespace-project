import { SingleGameItem } from "../../../../utils/types/types";
import styles from "./gameStores.module.scss";
import Button from "../../../global/button/Button";

type GameStoresProps = {
  game: SingleGameItem;
};

function GameStores({ game }: GameStoresProps) {
  return (
    <div className={styles.buy}>
      <p className={styles.buy__header}>Where to buy:</p>
      <nav className={styles.buy__list}>
        {game.stores &&
          game.stores.map((item) => (
            <Button
              sizeY="md"
              sizeX="md"
              key={item.id}
              href={{
                newPage: true,
                url: `https://${item.store?.domain}` || "",
              }}
              fontWeight={400}
              borderRadius="md"
            >
              {item.store.name}
            </Button>
          ))}
      </nav>
    </div>
  );
}

export default GameStores;
