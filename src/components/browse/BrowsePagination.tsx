import Pagination from "../global/Pagination";
import styles from "./browsePagination.module.scss";

function BrowsePagination() {
  return (
    <div className={styles.container}>
      <Pagination currentPage={1} maxPage={9} />
    </div>
  );
}

export default BrowsePagination;
