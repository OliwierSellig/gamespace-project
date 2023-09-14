import styles from "./gameContainer.module.scss";

function GameContainer({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default GameContainer;
