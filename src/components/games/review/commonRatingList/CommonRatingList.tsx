import { Dispatch, SetStateAction } from "react";
import CommonRatingItem from "../commonRatingItem/CommonRatingItem";
import styles from "./commonRatingList.module.scss";

const commonRankingItems = [
  { name: "Skip", minRating: 0.0, maxRating: 2.0 },
  { name: "Meh", minRating: 2.0, maxRating: 3.5 },
  { name: "Recommended", minRating: 3.5, maxRating: 4.5 },
  { name: "Exceptional", minRating: 4.5, maxRating: 5.0 },
];

type CommonRatingListProps = {
  currentRating: number;
  setCurrentRating: Dispatch<SetStateAction<number>>;
};

function CommonRatingList({
  currentRating,
  setCurrentRating,
}: CommonRatingListProps) {
  return (
    <ul className={styles.container}>
      {commonRankingItems.map((item) => (
        <CommonRatingItem
          key={item.name}
          currentRating={currentRating}
          setCurrentRating={setCurrentRating}
          name={item.name}
          minRating={item.minRating}
          maxRating={item.maxRating}
        />
      ))}
    </ul>
  );
}

export default CommonRatingList;
