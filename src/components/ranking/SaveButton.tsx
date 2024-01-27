import { useEffect, useState } from "react";
import styles from "./saveButton.module.scss";
import { FaCheck } from "react-icons/fa6";
import { dateType } from "../../utils/types";
import { useRanking } from "../../contexts/RankingContext";

type SaveButtonProps = {
  tempFrom: dateType;
  tempTo: dateType;
};

function SaveButton({ tempFrom, tempTo }: SaveButtonProps) {
  const { state, setDateFrom, setDateTo } = useRanking();
  const [saved, setSaved] = useState<boolean>(false);

  function updateDates() {
    setDateFrom({
      year: tempFrom.year,
      month: tempFrom.month,
      day: tempFrom.day,
    });
    setDateTo({ year: tempTo.year, month: tempTo.month, day: tempTo.day });
    setSaved(true);
  }

  function equalDates(dateFrom: dateType, dateTo: dateType) {
    const keys1 = Object.keys(dateFrom);
    const keys2 = Object.keys(dateTo);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (dateFrom[key] !== dateTo[key]) {
        return false;
      }
    }

    return true;
  }

  const disabled =
    equalDates(tempFrom, state.dateFrom) && equalDates(tempTo, state.dateTo);

  useEffect(() => {
    if (saved)
      setTimeout(() => {
        setSaved(false);
      }, 1000);

    if (disabled) setTimeout(() => {}, 1000);
  }, [saved, disabled]);

  return (
    <button
      disabled={disabled}
      onClick={updateDates}
      className={`${styles.btn} ${saved ? styles.btn__saved : ""} ${
        disabled ? styles.btn__disabled : ""
      }`}
    >
      {saved ? (
        <span className={styles.btn__box}>
          <FaCheck />
          Saved
        </span>
      ) : (
        <span>Save Changes</span>
      )}
    </button>
  );
}

export default SaveButton;
