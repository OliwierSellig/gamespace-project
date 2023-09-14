import SearchInput from "../../global/SearchInput";
import styles from "./wishlistHeader.module.scss";

function WishlistHeader({ searchQuery, setSearchQuery }) {
  return (
    <header className={styles.container}>
      <h2 className={styles.heading}>Your Wishlist</h2>
      <SearchInput
        sizeFont={2.4}
        padding={[0, 4.8, 0, 4.8]}
        marginBottom={0}
        inputStyle="search__wishlist"
        inputValue={searchQuery}
        handleChange={setSearchQuery}
      />
    </header>
  );
}

export default WishlistHeader;
