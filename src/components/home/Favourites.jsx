import Image from "next/image";
import styles from "./favourites.module.scss";
import Link from "next/link";
import { devList } from "../../utils/data";

function Favourites() {
  return (
    <section className={styles.fav}>
      <h2 className={styles.heading}>Favourite Developer?</h2>
      <nav className={styles.container}>
        {devList.map((dev) => (
          <Link
            aria-label={`Search ${dev.name}`}
            className={styles.item}
            key={crypto.randomUUID()}
            href={`/searcg?developers=${dev.slug}`}
          >
            <div className={styles.item__img}>
              <Image
                alt=""
                src={dev.img}
                fill
                sizes="(max-width: 600px) 46vw, (max-width: 900px) 45vw, 30vw"
              />
            </div>
            <span className={styles.item__title}>{dev.name}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default Favourites;
