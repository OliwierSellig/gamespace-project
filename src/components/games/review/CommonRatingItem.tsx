import { Dispatch, SetStateAction } from "react";
import styles from "./commonRatingItem.module.scss";

type CommonRatingItemProps = {
  name: string;
  minRating: number;
  maxRating: number;
  currentRating: number;
  setCurrentRating: Dispatch<SetStateAction<number>>;
};

function CommonRatingItem({
  name,
  minRating,
  maxRating,
  currentRating,
  setCurrentRating,
}: CommonRatingItemProps) {
  const isActive = currentRating > minRating && currentRating <= maxRating;

  function animateThumb(targetValue: number) {
    const step = 0.1;
    const animationDuration = 140;

    const valueDifference = targetValue - currentRating;
    const animationSteps = Math.abs(valueDifference) / step;
    const animationInterval = animationDuration / animationSteps;

    let currentValue = currentRating;
    const interval = setInterval(() => {
      currentValue += valueDifference > 0 ? step : -step;
      if (
        valueDifference > 0
          ? currentValue >= targetValue
          : currentValue <= targetValue
      ) {
        clearInterval(interval);
        currentValue = targetValue;
      }
      setCurrentRating(currentValue);
    }, animationInterval);
  }

  return (
    <li>
      <button
        onClick={() => animateThumb(minRating + 0.1)}
        className={`${styles.btn} ${isActive ? styles.btn__active : ""}`}
      >
        {name}
      </button>
    </li>
  );
}

export default CommonRatingItem;
