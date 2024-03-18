import Image from "next/image";
import styles from "./recentGameItem.module.scss";
import notFound from "./../../../../../../public/img/not-found.png";
import RecentGamesCount from "../recentGamesCount/RecentGamesCount";
import Link from "next/link";
import RecentGamesOptions from "../recentGamesOptions/RecentGamesOptions";
import { BasicItemType } from "../../../../../utils/types";

type RecentGameItemProps = {
  game: BasicItemType;
};

function RecentGameItem({ game }: RecentGameItemProps) {
  const href = `/games/${game.id}`;

  return (
    <li className={styles.container}>
      <Link tabIndex={-1} href={href} className={styles.cover}>
        <Image
          src={game.cover || notFound}
          sizes="12rem"
          fill
          alt={`${game.name} Cover`}
        />
      </Link>
      <div className={styles.content}>
        <Link href={href} className={styles.name}>
          {game.name}
        </Link>
        <nav className={styles.row}>
          <RecentGamesCount count={game.added} />
          <RecentGamesOptions game={game} />
        </nav>
      </div>
    </li>
  );
}

export default RecentGameItem;
