import styles from "./removeGameItem.module.scss";

function RemoveGameItem({ game, toggleGameDeletion, checkInGamesToDelete }) {
  return (
    <li
      tabIndex={0}
      role="button"
      className={`${styles.item} ${
        checkInGamesToDelete(game.id) ? styles.clicked : ""
      }`}
      onClick={() => toggleGameDeletion(game)}
    >
      <span className={styles.name}>{game.name}</span>
      <img
        src="/svg/check.svg"
        className={`${styles.icon} ${
          !checkInGamesToDelete(game.id) ? styles.hidden : ""
        }`}
        alt="Checked"
      />
    </li>
  );
}

export default RemoveGameItem;
