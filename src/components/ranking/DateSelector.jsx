import { useNavigate } from "react-router-dom";
import { useRanking } from "../../contexts/RankingContext";
import styles from "./dateSelector.module.scss";
import { useUtility } from "../../contexts/UtilityContext";

function DateSelector() {
  const navigate = useNavigate();
  const { dateFrom, dateTo } = useRanking();
  const { setToDoubleDigit } = useUtility();

  return (
    <div className={styles.selector}>
      <div className={styles.container}>
        <span className={styles.text}>From:&nbsp;</span>
        <button
          className={styles.btn}
          onClick={() => navigate(`?set=day&date=from`)}
        >
          {setToDoubleDigit(dateFrom.day)}
        </button>
        <span className={styles.text}>-</span>
        <button
          className={styles.btn}
          onClick={() => navigate(`?set=month&date=from`)}
        >
          {setToDoubleDigit(dateFrom.month)}
        </button>
        <span className={styles.text}>-</span>
        <button
          className={styles.btn}
          onClick={() => navigate(`?set=year&date=from`)}
        >
          {dateFrom.year}
        </button>
      </div>
      <div className={styles.container}>
        <span className={styles.text}>To:&nbsp;</span>
        <button
          className={styles.btn}
          onClick={() => navigate(`?set=day&date=to`)}
        >
          {setToDoubleDigit(dateTo.day)}
        </button>
        <span className={styles.text}>-</span>
        <button
          className={styles.btn}
          onClick={() => navigate(`?set=month&date=to`)}
        >
          {setToDoubleDigit(dateTo.month)}
        </button>
        <span className={styles.text}>-</span>
        <button
          className={styles.btn}
          onClick={() => navigate(`?set=year&date=to`)}
        >
          {dateTo.year}
        </button>
      </div>
    </div>
  );
}

export default DateSelector;
