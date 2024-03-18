import { Dispatch, SetStateAction } from "react";
import styles from "./rangeBar.module.scss";

type RangeBarProps = {
  currentRating: number;
  maxRating?: number;
  setCurrentRating: Dispatch<SetStateAction<number>>;
};

function RangeBar({
  currentRating,
  maxRating = 5,
  setCurrentRating,
}: RangeBarProps) {
  const currentValue = ((currentRating / maxRating) * 100).toFixed(1);

  return (
    <div className={styles.container}>
      <input
        id="rating"
        type="range"
        min={1}
        max={maxRating * 10}
        step={1}
        style={{
          backgroundImage: `linear-gradient(to right, #ccc 0%, #aaa ${currentValue}%, #555 ${currentValue}%, #777 100%)`,
        }}
        value={(currentRating * 10).toFixed(1)}
        onChange={(e) => {
          if (!e.target.value) return;
          console.log(parseFloat(e.target.value) / 10);
          setCurrentRating(parseFloat(e.target.value) / 10);
        }}
        className={styles.input}
      />
      <label htmlFor="rating" className={styles.number}>
        {currentRating.toFixed(1)}/5
      </label>
    </div>
  );
}

export default RangeBar;
