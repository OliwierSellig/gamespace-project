import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { dateType } from "../../../../utils/types/types";
import { useRanking } from "../../../../contexts/rankingContext/RankingContext";
import Button from "../../../global/button/Button";

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
    toast.success("Saved changes!");
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
    <Button
      borderRadius="md"
      style={{ name: "default", shade: "light" }}
      disabled={disabled}
      handleClick={updateDates}
    >
      {saved ? "Saved" : "Save Changes"}
    </Button>
  );
}

export default SaveButton;
