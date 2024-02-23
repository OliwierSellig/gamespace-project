"use client";

import { browseByPages } from "../../utils/data";
import PageNav from "../global/PageNav";
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
