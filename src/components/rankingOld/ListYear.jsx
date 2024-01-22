import { useEffect, useState } from "react";
import { useRanking } from "../../contexts/RankingContext";
import { useSearchParams, useRouter } from "next/navigation";

import TurnBtn from "../global/TurnBtn";
import styles from "./listYear.module.scss";

const initialYear = 1990;

function ListYear() {
  const { dispatch } = useRanking();
  const params = useSearchParams();
  const router = useRouter();
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
      <nav className={styles.list}>
        {yearList
          .slice(0 + 12 * currentPage, 12 + 12 * currentPage)
          .map((year) => (
            <button
              className={styles.item}
              key={crypto.randomUUID()}
              onClick={() => {
                if (params.get("date") == "from")
                  dispatch({ type: "dateFromYearSet", payload: year });
                if (params.get("date") == "to")
                  dispatch({ type: "dateToYearSet", payload: year });
                router.back();
              }}
            >
              {year}
            </button>
          ))}
      </nav>
      <TurnBtn next={false} handleClick={goPrev} />
      <TurnBtn next={true} handleClick={goNext} />
    </div>
  );
}

export default ListYear;
