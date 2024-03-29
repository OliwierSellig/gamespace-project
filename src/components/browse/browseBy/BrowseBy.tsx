"use client";

import { browseByPages } from "../../../utils/data/browse";
import PageNav from "../../global/pageNav/PageNav";
import styles from "./browseBy.module.scss";

function BrowseBy() {
  return (
    <header className={styles.container}>
      <p className={styles.browse}>Browse By:</p>
      <PageNav list={browseByPages} />
    </header>
  );
}

export default BrowseBy;
