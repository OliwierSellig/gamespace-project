import styles from "./commonRatingItem.module.scss";

type CommonRatingItemProps = {
  name: string;
  minRating: number;
  maxRating: number;
};

function CommonRatingItem({
  name,
  minRating,
  maxRating,
}: CommonRatingItemProps) {
  return (
    <li>
      <button className={styles.btn}>{name}</button>
    </li>
  );
}

export default CommonRatingItem;
