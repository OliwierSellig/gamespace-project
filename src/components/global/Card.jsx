import styles from "./card.module.scss";

function Card({
  cardStyle,
  rsc,
  title,
  details,
  scale,
  container,
  handleClick,
}) {
  return (
    // ----------------------------------------------------------
    // Checking Whether on Click the Card has Been also Dragged
    // ----------------------------------------------------------

    <li
      role="button"
      className={`${styles.card} ${scale ? styles.card__scale : ""} ${
        cardStyle ? styles[cardStyle] : ""
      }`}
      onClick={(e) => {
        if (container?.classList?.contains("drag")) {
          return;
        }
        handleClick();
      }}
    >
      <img className={styles.img} src={rsc} alt={`${title} cover`} />
      <div className={styles.container} tabIndex={0}>
        <span className={styles.title}>{title}</span>
        <span className={styles.details}>{details}</span>
      </div>
    </li>
  );
}

export default Card;
