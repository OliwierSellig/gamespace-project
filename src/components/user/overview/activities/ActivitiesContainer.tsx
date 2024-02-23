import UserHeading from "../../layout/UserHeading";
import LogContainer from "./LogContainer";
import styles from "./activitiesContainer.module.scss";

function ActivitiesContainer() {
  return (
    <section className={styles.container}>
      <UserHeading>Activity Board</UserHeading>
      <LogContainer />
    </section>
  );
}

export default ActivitiesContainer;
