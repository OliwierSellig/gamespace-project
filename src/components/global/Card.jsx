import Image from "next/image";
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
      <Image src={rsc} className={styles.img} fill alt={`${title} cover`} />

      <div className={styles.container} tabIndex={0}>
        <span className={styles.title}>{title}</span>
        <span className={styles.details}>{details}</span>
      </div>
    </li>
  );
}

export default Card;
