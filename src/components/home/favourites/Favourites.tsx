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
            logo={dev.logo}
            id={dev.id}
            gameSeries={dev.gameSeries}
            video={dev.video}
            key={dev.id}
          />
        ))}
      </nav>
    </section>
  );
}

export default Favourites;
