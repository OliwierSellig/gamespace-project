import FilterByBtn from "../../global/FilterByBtn";
import OrderByBtn from "../../global/OrderByBtn";
import styles from "./libraryHeader.module.scss";

function LibraryHeader({ filterBy, setFilterBy, setOrderBy, orderBy }) {
  return (
    <header className={styles.container}>
      <h2 className={styles.heading}>Game Library</h2>
      <nav className={styles.btnBox}>
        {filterBy === "all" && (
          <OrderByBtn handleChange={setOrderBy} order={orderBy} />
        )}
        <FilterByBtn filterBy={filterBy} hanldeClick={setFilterBy} />
      </nav>
    </header>
  );
}

export default LibraryHeader;
