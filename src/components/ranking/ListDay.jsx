import { useEffect, useState } from "react";
import { useRanking } from "../../contexts/RankingContext";
import styles from "./listDay.module.scss";
import { useSearchParams, useRouter } from "next/navigation";

function ListDay() {
  const { dispatch, dateFrom, dateTo } = useRanking();
  const params = useSearchParams();
  const router = useRouter();
  const [dayList, setDayList] = useState([]);

  // --------------------------------------------------
  // Getting exact number of days for the chosen month
  // --------------------------------------------------

  useEffect(() => {
    const selectedDate = params.get("date") === "from" ? dateFrom : dateTo;
    const daysAmount = new Date(
      selectedDate.year,
      selectedDate.month,
      0
    ).getDate();
    const listArray = Array.from({ length: daysAmount }, (_, i) => i + 1);
    setDayList(listArray);
  }, [dateFrom, dateTo, params]);

  return (
    <nav className={styles.list}>
      {dayList.map((day) => (
        <button
          className={styles.item}
          key={crypto.randomUUID()}
          onClick={() => {
            if (params.get("date") === "from")
              dispatch({ type: "dateFromDaySet", payload: day });
            if (params.get("date") === "to")
              dispatch({ type: "dateToDaySet", payload: day });
            router.back();
          }}
        >
          {day}
        </button>
      ))}
    </nav>
  );
}

export default ListDay;
