import styles from "./browseItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";
import notFound from "../../../public/img/not-found.png";

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
};

function BrowseItem({ cover, name, gameCount, popularGames }: BrowseItemProps) {
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
        <Link className={styles.link} href="/">
          View Games
        </Link>

        <p className={styles.count}>
          <span className={styles.count__game}>Game Count:</span>
          <span className={styles.count__number}>
            {gameCount || "undefined"}
          </span>
        </p>
        <ul className={styles.list}>
          {popularGames ? (
            popularGames.slice(0, 3).map((game) => (
              <li className={styles.popular} key={game.id}>
                <Link
                  href={`/games/${game.id}`}
                  className={styles.popular__game}
                >
                  {game.name}
                </Link>
                <span className={styles.popular__visitors}>
                  <span>{game.added}</span>
                  <HiOutlineUser />
                </span>
              </li>
            ))
          ) : (
            <p className={styles.empty}>No popular games</p>
          )}
        </ul>
      </div>
    </li>
  );
}

export default BrowseItem;
