import CommonRatingItem from "./CommonRatingItem";
import styles from "./commonRatingList.module.scss";

const commonRankingItems = [
  { name: "Exceptional", minRating: 4.5, maxRating: 5.0 },
  { name: "Recommended", minRating: 3.5, maxRating: 4.5 },
  { name: "Meh", minRating: 2.0, maxRating: 3.5 },
  { name: "Skip", minRating: 0.0, maxRating: 2.0 },
];

function CommonRatingList() {
  return (
    <ul className={styles.container}>
      {commonRankingItems.map((item) => (
        <CommonRatingItem
          key={item.name}
          name={item.name}
          minRating={item.minRating}
          maxRating={item.maxRating}
        />
      ))}
    </ul>
  );
}

export default CommonRatingList;
