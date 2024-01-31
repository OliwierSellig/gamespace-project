"use client";

import styles from "./pagination.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

type PaginationProps = {
  currentPage: number;
  maxPage: number;
  length?: number;
};

function Pagination({
  currentPage,

  maxPage,
  length = 5,
}: PaginationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const canGoNext = currentPage < maxPage;
  const canGoPrev = currentPage > 1;

  function setPage(page: number) {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set("page", page.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";
    if (page <= 1 || page >= maxPage) return;
    router.push(`${pathname}${query}`);
  }

  return (
    <nav className={styles.container}>
      <button onClick={() => setPage(1)} className={styles.text}>
        First
      </button>
      <div className={styles.box}>
        <button
          disabled={!canGoPrev}
          onClick={() => setPage(currentPage - 1)}
          className={`${styles.icon} ${styles.move}`}
        >
          <HiMiniChevronLeft />
        </button>
        {Array.from({ length: length }, (_, i) => (
          <button
            onClick={() => setPage(currentPage + 1)}
            className={`${styles.number} ${styles.move}`}
            key={i}
          >
            {currentPage + i}
          </button>
        ))}
        <button
          disabled={!canGoNext}
          onClick={() => setPage(currentPage + 1)}
          className={`${styles.icon} ${styles.move}`}
        >
          <HiMiniChevronRight />
        </button>
      </div>
      <button onClick={() => setPage(maxPage)} className={styles.text}>
        Last
      </button>
    </nav>
  );
}

export default Pagination;
