import { devList } from "../../../utils/data/home";
import FavouriteDevItem from "../favouriteDevItem/FavouriteDevItem";
import SectionHeading from "../sectionHeading/SectionHeading";
import styles from "./favourites.module.scss";

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
