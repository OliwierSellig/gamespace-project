import styles from "./browseItem.module.scss";
import Image from "next/image";
import notFound from "../../../public/img/not-found.png";
import Button from "../global/Button";
import PopularGamesCol from "../global/popularGames/PopularGamesCol";

type BrowseItemProps = {
  cover: string;
  name: string;
  gameCount: number;
  popularGames: {
    added: number;
    id: number;
    name: string;
    slug: string;
  }[];
  href: string;
};

function BrowseItem({
  cover,
  name,
  gameCount,
  popularGames,
  href,
}: BrowseItemProps) {
  return (
    <li className={styles.container}>
      <Image
        src={cover || notFound}
        alt="Game Cover"
        fill
        sizes="(max-width: 500px) 95vw, (max-width: 960px) 45vw, (max-width: 1500px) 30vw, (max-width: 2000px) 22vw, 440px"
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{name || "Undefined"}</h2>
        <Button
          style={{ name: "opacity", shade: "white" }}
          borderRadius="sm"
          href={{ url: href }}
          additionalStyle={{ marginBottom: "4.8rem" }}
          sizeX="sm"
          sizeY="md"
        >
          View Games
        </Button>

        <p className={styles.count}>
          <span className={styles.count__game}>Game Count:</span>
          <span className={styles.count__number}>
            {gameCount || "undefined"}
          </span>
        </p>
        <PopularGamesCol gameList={popularGames} />
      </div>
    </li>
  );
}

export default BrowseItem;
