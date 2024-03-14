import styles from "./collectionsBoxInput.module.scss";

type CollectionsBoxInputProps = {
  query: string;
  handleChange: (e: string) => void;
};

function CollectionsBoxInput({
  query,
  handleChange,
}: CollectionsBoxInputProps) {
  return (
    <input
      value={query}
      onChange={(e) => handleChange(e.target.value)}
      type="text"
      className={styles.search}
      placeholder="Search"
    />
  );
}

export default CollectionsBoxInput;
