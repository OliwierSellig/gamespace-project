import { useNavigate } from "react-router-dom";
import styles from "./favourites.module.scss";
import { useUtility } from "../../contexts/UtilityContext";

function Favourites({ title }) {
  const navigate = useNavigate();
  const { devList } = useUtility();

  return (
    <section className={styles.fav}>
      <h2 className={styles.heading}>Favourite Developer?</h2>
      <ul className={styles.container}>
        {devList.map((dev) => (
          <li
            className={styles.item}
            key={crypto.randomUUID()}
            onClick={() => navigate(`/search?developers=${dev.slug}`)}
          >
            <img
              className={styles.item__img}
              src={`${dev.img.large}`}
              srcSet={`${dev.img.small} 400w, ${dev.img.medium} 600w, ${dev.img.large} 800w `}
              sizes="(max-width: 600px) 46vw, (max-width: 900px) 45vw, 30vw"
              alt={`${dev.name} Cover`}
            />
            <span className={styles.item__title}>{dev.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Favourites;
