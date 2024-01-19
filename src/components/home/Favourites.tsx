import { devList } from "../../utils/data";
import Image from "next/image";
import Link from "next/link";
import styles from "./favourites.module.scss";
import SectionHeading from "./SectionHeading";

function Favourites() {
  return (
    <section className={styles.container}>
      <SectionHeading>Favourite Developer?</SectionHeading>
      <nav className={styles.nav}>
        {devList.map((dev) => (
          <Link
            key={dev.slug}
            href={`/searcg?developers=${dev.slug}`}
            className={styles.item}
          >
            <div className={styles.logo}>
              <div className={styles.logo__icon}>
                <Image src={dev.logo} alt={dev.name} fill />
              </div>
            </div>
            <div className={styles.video}>
              <video src={dev.video} muted autoPlay loop />
              <p className={styles.name}>{dev.name}</p>
              <p className={styles.games}>{dev.gameSeries.join(" , ")}</p>
            </div>
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default Favourites;
