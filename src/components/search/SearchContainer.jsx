import styles from "./searchContainer.module.scss";

function SearchContainer({ children }) {
  return <main className={styles.container}>{children}</main>;
}

export default SearchContainer;
