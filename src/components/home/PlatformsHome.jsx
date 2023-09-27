import { useNavigate } from "react-router-dom";
import { useUtility } from "../../contexts/UtilityContext";
import styles from "./platformsHome.module.scss";

function PlatformsHome() {
  const { platforms } = useUtility();
  const navigate = useNavigate();

  return (
    <section className={styles.platforms}>
      <h2 className={styles.heading}>So, what type of person are you?</h2>
      <ul className={styles.container}>
        {platforms.map((platform) => (
          <li
            tabIndex={0}
            role="button"
            className={styles.item}
            key={crypto.randomUUID()}
            onClick={() => navigate(`/search?platforms=${platform.id}`)}
          >
            <img
              className={styles.item__icon}
              src={`/${platform.img}`}
              alt={`${platform.name} icon`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PlatformsHome;
