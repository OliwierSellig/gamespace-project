"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { setPage } from "../../../utils/functions/functions";
import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  maxPage: number;
  length?: number;
  padding?: { top: number; right: number; bottom: number; left: number };
};

function Pagination({
  currentPage,
  maxPage,
  length = 5,
  padding = { top: 0, left: 0, right: 0, bottom: 0 },
}: PaginationProps) {
  const paginationStyles = {
    padding: `${padding.top}rem ${padding.right}rem ${padding.bottom}rem ${padding.left}rem`,
  };
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const page = currentPage > 0 && currentPage <= maxPage ? currentPage : 1;
  const canGoNext = page < maxPage;
  const canGoPrev = page > 1;

  function setPagePagination(page: number) {
    setPage(router, pathname, params, maxPage, page);
  }

  return (
    <nav className={styles.container} style={paginationStyles}>
      <button
        disabled={!canGoPrev}
        onClick={() => setPagePagination(1)}
        className={`${styles.text} ${!canGoPrev ? styles.text__disabled : ""}`}
      >
        First
      </button>
      <div className={styles.box}>
        <button
          aria-label="Previous page"
          disabled={!canGoPrev}
          onClick={() => setPagePagination(page - 1)}
          className={`${styles.icon} ${
            !canGoPrev ? styles.icon__disabled : ""
          } ${styles.move}`}
        >
          <HiMiniChevronLeft />
        </button>
        {length > maxPage ? (
          Array.from({ length: maxPage }, (_, i) => (
            <button
              onClick={() => setPagePagination(i + 1)}
              disabled={page === i + 1}
              className={`${styles.number} ${styles.move} ${
                page === i + 1 ? styles.number__active : ""
              }`}
              key={i}
            >
              {i + 1}
            </button>
          ))
        ) : page === 1 ? (
          Array.from(
            { length: length < maxPage ? length : maxPage },
            (_, i) => (
              <button
                onClick={() => setPagePagination(page + i)}
                disabled={i === 0}
                className={`${styles.number} ${styles.move} ${
                  i === 0 ? styles.number__active : ""
                }`}
                key={i}
              >
                {page + i}
              </button>
            ),
          )
        ) : (
          <>
            <button
              onClick={() => setPagePagination(1)}
              disabled={page === 1}
              className={`${styles.number} ${styles.move} ${
                page === 1 ? styles.number__active : ""
              }`}
            >
              1
            </button>
            {maxPage - currentPage <= 3
              ? Array.from({ length: length - 1 }, (_, i) => (
                  <button
                    onClick={() => setPagePagination(maxPage - 3 + i)}
                    disabled={page === maxPage - 3 + i}
                    className={`${styles.number} ${styles.move} ${
                      page === maxPage - 3 + i ? styles.number__active : ""
                    }`}
                    key={i}
                  >
                    {maxPage - 3 + i}
                  </button>
                ))
              : Array.from({ length: length - 1 }, (_, i) => (
                  <button
                    onClick={() => setPagePagination(page + i)}
                    disabled={i === 0}
                    className={`${styles.number} ${styles.move} ${
                      i === 0 ? styles.number__active : ""
                    }`}
                    key={i}
                  >
                    {page + i}
                  </button>
                ))}
          </>
        )}

        <button
          aria-label="Next page"
          disabled={!canGoNext}
          onClick={() => setPagePagination(page + 1)}
          className={`${styles.icon} ${
            !canGoNext ? styles.icon__disabled : ""
          } ${styles.move}`}
        >
          <HiMiniChevronRight />
        </button>
      </div>
      <button
        disabled={!canGoNext}
        onClick={() => setPagePagination(maxPage)}
        className={`${styles.text} ${!canGoNext ? styles.text__disabled : ""}`}
      >
        Last
      </button>
    </nav>
  );
}

export default Pagination;
