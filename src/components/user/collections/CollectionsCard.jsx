import styles from "./collectionsCard.module.scss";

const BACKGROUND_IMAGES_LIMIT = 4;

function CollectionsCard({ collection }) {
  return (
    <li
      role="button"
      tabIndex={0}
      className={styles.container}
      onClick={() => {}}
    >
      <h2 className={styles.listName}>{collection.name}</h2>
      <p className={styles.author}>
        Collection <span className={styles.by}>by:</span> John Sanderson
      </p>
      <p className={styles.games}>
        <span className={styles.games__count}>{collection.games.length}</span>
        <span className={styles.games__text}>games</span>
      </p>
      <div className={styles.background}>
        {collection.games.slice(0, BACKGROUND_IMAGES_LIMIT).map((game) => (
          <img
            className={styles.background__img}
            src={game.background_image}
            alt={game.name}
            key={game.id}
          />
        ))}
      </div>
      <div className={styles.shade} />
    </li>
  );
}

export default CollectionsCard;
