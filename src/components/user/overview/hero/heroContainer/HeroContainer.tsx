import OverviewSectionContainer from "../../layout/overviewSectionContainer/OverviewSectionContainer";
import UserBox from "../userBox/UserBox";
import UserStats from "../userStats/UserStats";
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
