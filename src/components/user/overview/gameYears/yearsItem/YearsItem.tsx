import Image from "next/image";
import { LibraryItemType } from "../../../../../utils/types/types";
import notFound from "../../../../../../public/img/not-found.png";
import Button from "../../../../global/button/Button";
import PopularGamesCol from "../../../../global/popularGames/popularGamesCol/PopularGamesCol";
import styles from "./yearsItem.module.scss";

type YearsItemProps = {
  gameList: LibraryItemType[];
  year: number;
};

function YearsItem({ gameList, year }: YearsItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        {gameList.slice(0, 3).map((game) => (
          <div key={game.id} className={styles.background__cover}>
            <Image
              src={game.cover || notFound}
              fill
              alt=""
              sizes="(max-width: 460px) 95vw, (max-width: 560px) 60vw, (max-width: 1024px) 45vw, (max-width: 1600px) 30vw, 50rem"
            />
          </div>
        ))}
      </div>

      <h3 className={styles.heading}>{year}</h3>
      <Button
        href={{ url: `/user/library?filter=year-of-release` }}
        style={{ name: "opacity", shade: "white" }}
        borderRadius="sm"
        additionalStyle={{ marginBottom: "2.4rem" }}
      >
        View Games
      </Button>
      <PopularGamesCol gameList={gameList} />
    </div>
  );
}

export default YearsItem;
