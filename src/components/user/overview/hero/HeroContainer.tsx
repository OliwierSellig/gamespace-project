import OverviewSectionContainer from "../layout/OverviewSectionContainer";
import UserBox from "./UserBox";
import UserStats from "./UserStats";
import styles from "./heroContainer.module.scss";

function HeroContainer() {
  return (
    <OverviewSectionContainer>
      <div className={styles.container}>
        <UserBox />
        <UserStats />
      </div>
    </OverviewSectionContainer>
  );
}

export default HeroContainer;
