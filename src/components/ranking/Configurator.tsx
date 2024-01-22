import DateSetter from "./DateSetter";
import RankingOrder from "./RankingOrder";
import styles from "./configurator.module.scss";

function Configurator() {
  return (
    <nav className={styles.container}>
      <div className={styles.row}>
        <DateSetter date={{ day: 19, month: "JUL", year: 2019 }}>
          Date From
        </DateSetter>
        <DateSetter date={{ day: 21, month: "OCT", year: 2023 }}>
          Date To
        </DateSetter>
      </div>
      <RankingOrder />
    </nav>
  );
}

export default Configurator;
