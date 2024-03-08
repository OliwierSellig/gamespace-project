import styles from "./reviewText.module.scss";

function ReviewText() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Review Text</h2>
      <div className={styles.box}>
        <textarea
          placeholder="Write a review here..."
          className={styles.content}
        />
        {/* <span className={styles.info}>450 characters left</span> */}
      </div>
    </div>
  );
}

export default ReviewText;
