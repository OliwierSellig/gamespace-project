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
  console.log(currentRating);
  const currentValue = ((currentRating / maxRating) * 100).toFixed(1);
  console.log(currentValue);
  return (
    <div className={styles.container}>
      <input
        type="range"
        min={0}
        max={maxRating * 10}
        step={1}
        style={{
          backgroundImage: `linear-gradient(to right, #ccc 0%, #aaa ${currentValue}%, #555 ${currentValue}%, #777 100%)`,
        }}
        value={currentRating * 10}
        onChange={(e) => setCurrentRating(parseInt(e.target.value) / 10)}
        className={styles.input}
      />
      <span className={styles.number}>{currentRating.toFixed(1)}/5</span>
    </div>
  );
}

export default RangeBar;
