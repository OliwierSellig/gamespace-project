import OverviewSection from "../layout/OverviewSection";
import UserBox from "./UserBox";
import UserStats from "./UserStats";
import styles from "./heroContainer.module.scss";

function HeroContainer() {
  return (
    <OverviewSection>
      <div className={styles.container}>
        <UserBox />
        <UserStats />
      </div>
    </OverviewSection>
  );
}

export default HeroContainer;
