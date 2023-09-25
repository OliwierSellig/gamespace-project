import SearchInput from "../../global/SearchInput";
import styles from "./reviewsHeader.module.scss";

function ReviewsHeader({ searchQuery, setSearchQuery }) {
  return (
    <header className={styles.header}>
      <h2 className={styles.heading}>Your Reviews</h2>
      <SearchInput
        inputValue={searchQuery}
        handleChange={setSearchQuery}
        inputStyle="search__reviews"
        placeholder="Search for reviews"
      />
    </header>
  );
}

export default ReviewsHeader;
