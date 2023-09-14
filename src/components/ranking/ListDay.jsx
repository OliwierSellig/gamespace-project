import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./listDay.module.scss";
import { useEffect, useState } from "react";
import { useRanking } from "../../contexts/RankingContext";

function ListDay() {
  const [searchParams] = useSearchParams();
  const [dayList, setDayList] = useState([]);
  const navigate = useNavigate();
  const { dispatch, dateFrom, dateTo } = useRanking();

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
