import Image from "next/image";
import Link from "next/link";
import styles from "./favouriteDevItem.module.scss";

type FavouriteDevItemProps = {
  slug: string;
  name: string;
  logo: string;
  gameSeries: string[];
  video: string;
};

function FavouriteDevItem({
  name,
  slug,
  gameSeries,
  logo,
  video,
}: FavouriteDevItemProps) {
  return (
    <Link
      key={slug}
      href={`/searcg?developers=${slug}`}
      className={styles.item}
    >
      <div className={styles.logo}>
        <div className={styles.logo__icon}>
          <Image src={logo} alt={name} fill />
        </div>
      </div>
      <div className={styles.video}>
        <video src={video} muted autoPlay loop />
        <p className={styles.name}>{name}</p>
        <p className={styles.games}>{gameSeries.join(" , ")}</p>
      </div>
    </Link>
  );
}

export default FavouriteDevItem;
