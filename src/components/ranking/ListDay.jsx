import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRanking } from "../../contexts/RankingContext";
import styles from "./listDay.module.scss";

function ListDay() {
  const { dispatch, dateFrom, dateTo } = useRanking();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [dayList, setDayList] = useState([]);

  // --------------------------------------------------
  // Getting exact number of days for the chosen month
  // --------------------------------------------------

  useEffect(() => {
    const selectedDate =
      searchParams.get("date") === "from" ? dateFrom : dateTo;
    const daysAmount = new Date(
      selectedDate.year,
      selectedDate.month,
      0
    ).getDate();
    const listArray = Array.from({ length: daysAmount }, (_, i) => i + 1);
    setDayList(listArray);
  }, [dateFrom, dateTo, searchParams]);

  return (
    <ul className={styles.list}>
      {dayList.map((day) => (
        <li
          tabIndex={0}
          role="button"
          className={styles.item}
          key={crypto.randomUUID()}
          onClick={() => {
            if (searchParams.get("date") === "from")
              dispatch({ type: "dateFromDaySet", payload: day });
            if (searchParams.get("date") === "to")
              dispatch({ type: "dateToDaySet", payload: day });
            navigate(-1);
          }}
        >
          {day}
        </li>
      ))}
    </ul>
  );
}

export default ListDay;
