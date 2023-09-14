import styles from "./browseContainer.module.scss";

function BrowseContainer({ children }) {
  return <main className={styles.browse}>{children}</main>;
}

export default BrowseContainer;
