"use client";

import { useSearchParams } from "next/navigation";
import Pagination from "../global/Pagination";
import styles from "./browsePagination.module.scss";

function BrowsePagination() {
  const params = useSearchParams();

  return (
    <div className={styles.container}>
      <Pagination currentPage={Number(params.get("page")) || 0} maxPage={9} />
    </div>
  );
}

export default BrowsePagination;
