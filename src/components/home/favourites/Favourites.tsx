import { devList } from "../../../utils/data/home";
import styles from "./favourites.module.scss";
import SectionHeading from "../layout/SectionHeading";
import FavouriteDevItem from "./favouriteDevItem/FavouriteDevItem";

function Favourites() {
  return (
    <section className={styles.container}>
      <SectionHeading>Favourite Developer?</SectionHeading>
      <nav className={styles.nav}>
        {devList.map((dev) => (
          <FavouriteDevItem
            name={dev.name}
            slug={dev.slug}
            logo={dev.logo}
            gameSeries={dev.gameSeries}
            video={dev.video}
            key={dev.slug}
          />
        ))}
      </nav>
    </section>
  );
}

export default Favourites;
