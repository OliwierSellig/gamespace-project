import { useRanking } from "../../contexts/RankingContext";
import styles from "./listMonth.module.scss";
import { useSearchParams, useRouter } from "next/navigation";

const MONTHS_AMOUNT = 12;

function ListMonth() {
  const { dispatch } = useRanking();
  const params = useSearchParams();
  const router = useRouter();

  return (
    <nav className={styles.list}>
      {Array.from({ length: MONTHS_AMOUNT }, (_, i) => (
        <button
          className={styles.item}
          key={crypto.randomUUID()}
          onClick={() => {
            if (params.get("date") === "from")
              dispatch({ type: "dateFromMonthSet", payload: i + 1 });

            if (params.get("date") === "to")
              dispatch({ type: "dateToMonthSet", payload: i + 1 });
            router.back();
          }}
        >
          {i + 1}
        </button>
      ))}
    </nav>
  );
}

export default ListMonth;
