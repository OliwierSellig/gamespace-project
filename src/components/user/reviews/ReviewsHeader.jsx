import SearchInput from "../../global/SearchInput";
import styles from "./reviewsHeader.module.scss";

function ReviewsHeader() {
  return (
    <header className={styles.header}>
      <h2 className={styles.heading}>Your Reviews</h2>
      <SearchInput inputStyle="search__reviews" />
    </header>
  );
}

export default ReviewsHeader;
