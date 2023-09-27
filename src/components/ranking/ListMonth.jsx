import { useNavigate, useSearchParams } from "react-router-dom";
import { useRanking } from "../../contexts/RankingContext";
import styles from "./listMonth.module.scss";

const MONTHS_AMOUNT = 12;

function ListMonth() {
  const { dispatch } = useRanking();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
      {Array.from({ length: MONTHS_AMOUNT }, (_, i) => (
        <li
          tabIndex={0}
          role="button"
          className={styles.item}
          key={crypto.randomUUID()}
          onClick={() => {
            if (searchParams.get("date") === "from")
              dispatch({ type: "dateFromMonthSet", payload: i + 1 });

            if (searchParams.get("date") === "to")
              dispatch({ type: "dateToMonthSet", payload: i + 1 });
            navigate(-1);
          }}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
}

export default ListMonth;
