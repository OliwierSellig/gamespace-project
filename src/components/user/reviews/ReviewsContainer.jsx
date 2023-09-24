import BtnNav from "../../global/BtnNav";
import ReviewCard from "./ReviewsCard";
import styles from "./reviewsContainer.module.scss";

function ReviewsContainer() {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {Array.from({ length: 10 }, () => (
          <ReviewCard key={crypto.randomUUID()} />
        ))}
      </ul>
      <BtnNav curPage={0} />
    </section>
  );
}

export default ReviewsContainer;
