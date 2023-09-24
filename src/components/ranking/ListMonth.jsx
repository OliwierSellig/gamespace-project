import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./listMonth.module.scss";
import { useRanking } from "../../contexts/RankingContext";

const monthsAmount = 12;

function ListMonth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { dispatch } = useRanking();

  return (
    <ul className={styles.list}>
      {Array.from({ length: monthsAmount }, (_, i) => (
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
