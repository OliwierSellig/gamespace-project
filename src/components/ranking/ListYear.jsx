import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRanking } from "../../contexts/RankingContext";
import TurnBtn from "../global/TurnBtn";
import styles from "./listYear.module.scss";

const initialYear = 1990;

function ListYear() {
  const { dispatch } = useRanking();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const yearsAmount = new Date().getFullYear() - (initialYear - 1);
  const yearList = Array.from(
    { length: yearsAmount },
    (_, i) => initialYear + i
  );

  // ------------------------------------
  // Setting The Current Page
  // ------------------------------------

  useEffect(() => {
    const totalReps = Math.ceil(yearList.length / 12) - 1;
    setCurrentPage(totalReps);
  }, [yearList.length]);

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function goNext() {
    if ((currentPage + 1) * 12 > yearList.length) return;
    setCurrentPage((page) => page + 1);
  }

  function goPrev() {
    if (!currentPage) return;
    setCurrentPage((page) => page - 1);
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {yearList
          .slice(0 + 12 * currentPage, 12 + 12 * currentPage)
          .map((year) => (
            <li
              tabIndex={0}
              role="button"
              className={styles.item}
              key={crypto.randomUUID()}
              onClick={() => {
                if (searchParams.get("date") == "from")
                  dispatch({ type: "dateFromYearSet", payload: year });
                if (searchParams.get("date") == "to")
                  dispatch({ type: "dateToYearSet", payload: year });
                navigate(-1);
              }}
            >
              {year}
            </li>
          ))}
      </ul>
      <TurnBtn next={false} handleClick={goPrev} />
      <TurnBtn next={true} handleClick={goNext} />
    </div>
  );
}

export default ListYear;
