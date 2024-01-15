import SearchInput from "../global/SearchInput";
import styles from "./userSearchHeader.module.scss";

function UserSearchHeader({
  query,
  setQuery,
  placeholder,
  title = "Your Title",
}) {
  return (
    <header className={styles.header}>
      <h2 className={styles.heading}>{title}</h2>
      <SearchInput
        inputValue={query}
        handleChange={setQuery}
        inputStyle="search__user"
        placeholder={placeholder || "Search for games"}
      />
    </header>
  );
}

export default UserSearchHeader;
