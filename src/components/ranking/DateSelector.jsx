import { setToDoubleDigit } from "@/utils/functions";
import { useRanking } from "../../contexts/RankingContext";
import styles from "./dateSelector.module.scss";
import Link from "next/link";

function DateSelector() {
  const { dateFrom, dateTo } = useRanking();

  return (
    <div className={styles.selector}>
      <div className={styles.container}>
        <span className={styles.text}>From:&nbsp;</span>
        <Link className={styles.btn} href="?set=day&date=from">
          {setToDoubleDigit(dateFrom.day)}
        </Link>
        {/* <button
          className={styles.btn}
          onClick={() => navigate(`?set=day&date=from`)}
        >
          {setToDoubleDigit(dateFrom.day)}
        </button> */}
        <span className={styles.text}>-</span>
        <Link className={styles.btn} href="?set=month&date=from">
          {setToDoubleDigit(dateFrom.month)}
        </Link>
        {/* <button
          className={styles.btn}
          onClick={() => navigate(`?set=month&date=from`)}
        >
          {setToDoubleDigit(dateFrom.month)}
        </button> */}
        <span className={styles.text}>-</span>
        <Link className={styles.btn} href="?set=year&date=from">
          {dateFrom.year}
        </Link>
        {/* <button
          className={styles.btn}
          onClick={() => navigate(`?set=year&date=from`)}
        >
          {dateFrom.year}
        </button> */}
      </div>
      <div className={styles.container}>
        <span className={styles.text}>To:&nbsp;</span>
        <Link className={styles.btn} href="?set=day&date=to">
          {setToDoubleDigit(dateTo.day)}
        </Link>
        {/* <button
          className={styles.btn}
          onClick={() => navigate(`?set=day&date=to`)}
        >
          {setToDoubleDigit(dateTo.day)}
        </button> */}
        <span className={styles.text}>-</span>
        <Link className={styles.btn} href="?set=month&date=to">
          {setToDoubleDigit(dateTo.month)}
        </Link>
        {/* <button
          className={styles.btn}
          onClick={() => navigate(`?set=month&date=to`)}
        >
          {setToDoubleDigit(dateTo.month)}
        </button> */}
        <span className={styles.text}>-</span>
        <Link className={styles.btn} href="?set=year&date=to">
          {dateTo.year}
        </Link>
        {/* <button
          className={styles.btn}
          onClick={() => navigate(`?set=year&date=to`)}
        >
          {dateTo.year}
        </button> */}
      </div>
    </div>
  );
}

export default DateSelector;
