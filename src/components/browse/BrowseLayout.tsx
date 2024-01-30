import { ChildrenProp } from "../../utils/types";
import BrowseBy from "./BrowseBy";
import BrowsePagination from "./BrowsePagination";
import Search from "./Search";
import styles from "./browseLayout.module.scss";

function BrowseLayout({ children }: ChildrenProp) {
  return (
    <div>
      <header className={styles.header}>
        <BrowseBy />
        <Search />
      </header>
      {children}
      <BrowsePagination />
    </div>
  );
}

export default BrowseLayout;
