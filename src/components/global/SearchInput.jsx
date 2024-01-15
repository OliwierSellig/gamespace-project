import { IoClose } from "react-icons/io5";
import styles from "./searchInput.module.scss";

function SearchInput({
  inputStyle = "",
  handleChange,
  inputValue,
  placeholder = "Search for games",
}) {
  return (
    <div className={`${styles.search} ${inputStyle ? styles[inputStyle] : ""}`}>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          className={styles.close}
          onClick={() => handleChange("")}
          aria-label="Empty Query"
        >
          <IoClose className={styles.close__icon} />
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default SearchInput;
