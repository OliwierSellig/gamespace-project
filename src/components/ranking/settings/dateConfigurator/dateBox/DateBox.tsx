import styles from "./dateBox.module.scss";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { setToDoubleDigit } from "../../../../../utils/functions";

type DateBoxProps = {
  list: string[];
  currentDate: string;
  onDateChange: (date: string) => void;
  minDate?: () => boolean;
  maxDate?: () => boolean;
};

function DateBox({
  list,
  currentDate,
  onDateChange,
  minDate,
  maxDate,
}: DateBoxProps) {
  const currentIndex = list.indexOf(currentDate);

  function canGoNext() {
    return currentDate !== list.at(-1) && (!maxDate || !maxDate?.());
  }

  function canGoPrev() {
    return currentDate !== list.at(0) && (!minDate || !minDate?.());
  }
  return (
    <div tabIndex={0} className={styles.container}>
      <button
        aria-label="Previous Date"
        disabled={!canGoPrev()}
        className={`${styles.btn} ${styles.btn__up}  ${
          canGoPrev() ? styles.btn__active : ""
        }`}
        onClick={() => {
          onDateChange(list[currentIndex - 1]);
        }}
      >
        <HiChevronUp />
      </button>
      <ul className={styles.list}>
        {list.map((date, i) => (
          <li
            style={{ transform: `translateY(${(i - currentIndex) * 100}%)` }}
            className={styles.item}
            key={date}
          >
            {setToDoubleDigit(date)}
          </li>
        ))}
      </ul>
      <button
        aria-label="Next Date"
        disabled={!canGoNext()}
        className={`${styles.btn} ${styles.btn__down} ${
          canGoNext() ? styles.btn__active : ""
        }`}
        onClick={() => onDateChange(list[currentIndex + 1])}
      >
        <HiChevronDown />
      </button>
    </div>
  );
}

export default DateBox;
