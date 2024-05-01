import Image from "next/image";
import Link from "next/link";
import styles from "./favouriteDevItem.module.scss";

type FavouriteDevItemProps = {
  name: string;
  logo: string;
  gameSeries: string[];
  video: string;
  id: number;
};

function FavouriteDevItem({
  name,
  gameSeries,
  logo,
  video,
  id,
}: FavouriteDevItemProps) {
  return (
    <Link href={`/search?dev=${id}`} className={styles.item}>
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
