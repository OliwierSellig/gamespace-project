import Image from "next/image";
import styles from "./recentGameItem.module.scss";
import notFound from "./../../../../../public/img/not-found.png";
import RecentGamesCount from "./RecentGamesCount";
import Link from "next/link";
import RecentGamesOptions from "./RecentGamesOptions";

type RecentGameItemProps = {
  cover: string;
  name: string;
  added: number;
  id: number;
};

function RecentGameItem({ cover, name, added, id }: RecentGameItemProps) {
  const href = `/games/${id}`;

  return (
    <li className={styles.container}>
      <Link tabIndex={-1} href={href} className={styles.cover}>
        <Image
          src={cover || notFound}
          sizes="12rem"
          fill
          alt={`${name} Cover`}
        />
      </Link>
      <div className={styles.content}>
        <Link href={href} className={styles.name}>
          {name}
        </Link>
        <nav className={styles.row}>
          <RecentGamesCount count={added} />
          <RecentGamesOptions id={id} />
        </nav>
      </div>
    </li>
  );
}

export default RecentGameItem;
