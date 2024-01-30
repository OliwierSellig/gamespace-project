import styles from "./searchInput.module.scss";
import { IoClose } from "react-icons/io5";

type SearchInputProps = {
  handleChange: (e: string) => void;
  inputValue: string;
  placeholder?: string;
};

function SearchInput({
  handleChange,
  inputValue,
  placeholder = "",
}: SearchInputProps) {
  return (
    <div className={styles.search}>
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
          <IoClose />
        </button>{" "}
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default SearchInput;
