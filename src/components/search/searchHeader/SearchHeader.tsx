import OrderByBtn from "../../global/OrderByBtn";
import Keyword from "../keyword/Keyword";
import SearchQuery from "../searchQuery/SearchQuery";
import styles from "./searchHeader.module.scss";

type SearchHeaderProps = {
  params: { [key: string]: string };
};

function SearchHeader({ params }: SearchHeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.row}>
        <OrderByBtn order={params["order"] || ""} />
        <SearchQuery />
      </nav>
      <Keyword params={params} />
    </header>
  );
}

export default SearchHeader;
