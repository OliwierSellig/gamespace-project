import { useSearch } from "../../contexts/SearchContext";
import LayoutStyles from "../global/LayoutStyles";
import OrderByBtn from "../global/OrderByBtn";
import styles from "./searchHeader.module.scss";

function SearchHeader() {
  const { setOrder, orderBy } = useSearch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Games for your keyword</h2>
        <OrderByBtn handleChange={setOrder} order={orderBy} />
      </div>
      <LayoutStyles />
    </header>
  );
}

export default SearchHeader;
