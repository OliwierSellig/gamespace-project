import Image from "next/image";
import styles from "./yearsItem.module.scss";
import notFound from "../../../../../public/img/not-found.png";
import { UserGameItem } from "../../../../utils/types";
import Button from "../../../global/Button";
import PopularGamesCol from "../../../global/popularGames/PopularGamesCol";

type YearsItemProps = {
  gameList: UserGameItem[];
  year: number;
};

function YearsItem({ gameList, year }: YearsItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        {gameList.slice(0, 3).map((game) => (
          <div key={game.id} className={styles.background__cover}>
            <Image src={game.background_image || notFound} fill alt="" />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>{year}</h3>
        <Button
          href={{ url: "search" }}
          style={{ name: "opacity", shade: "white" }}
          borderRadius="sm"
          additionalStyle={{ marginBottom: "2.4rem" }}
        >
          View Game
        </Button>
        <PopularGamesCol gameList={gameList} />
      </div>
    </div>
  );
}

export default YearsItem;
