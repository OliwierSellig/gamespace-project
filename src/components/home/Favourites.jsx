import { useNavigate } from "react-router-dom";
import { useUtility } from "../../contexts/UtilityContext";
import styles from "./favourites.module.scss";

function Favourites() {
  const { devList } = useUtility();
  const navigate = useNavigate();

  return (
    <section className={styles.fav}>
      <h2 className={styles.heading}>Favourite Developer?</h2>
      <ul className={styles.container}>
        {devList.map((dev) => (
          <li
            tabIndex={0}
            role="button"
            className={styles.item}
            key={crypto.randomUUID()}
            onClick={() => navigate(`/search?developers=${dev.slug}`)}
          >
            <img
              className={styles.item__img}
              srcSet={`${dev.img.small} 400w, ${dev.img.medium} 600w, ${dev.img.large} 800w `}
              sizes="(max-width: 600px) 46vw, (max-width: 900px) 45vw, 30vw"
              src={`${dev.img.large}`}
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
