import UserBox from "./UserBox";
import UserStats from "./UserStats";
import styles from "./heroContainer.module.scss";

function HeroContainer() {
  return (
    <section className={styles.container}>
      <UserBox />
      <UserStats />
    </section>
  );
}

export default HeroContainer;
