"use client";

import styles from "./pagination.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

type PaginationProps = {
  currentPage: number;
  maxPage: number;
  length?: number;
};

function Pagination({ currentPage, maxPage, length = 5 }: PaginationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const canGoNext = currentPage < maxPage;
  const canGoPrev = currentPage > 1;

  const page = currentPage > 0 && currentPage <= maxPage ? currentPage : 1;

  function setPage(p: number) {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set("page", p.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";
    if (p < 1 || p > maxPage) return;
    router.push(`${pathname}${query}`);
  }

  return (
    <nav className={styles.container}>
      <button
        disabled={!canGoPrev}
        onClick={() => setPage(1)}
        className={`${styles.text} ${!canGoPrev ? styles.text__disabled : ""}`}
      >
        First
      </button>
      <div className={styles.box}>
        <button
          aria-label="Previous page"
          disabled={!canGoPrev}
          onClick={() => setPage(page - 1)}
          className={`${styles.icon} ${
            !canGoPrev ? styles.icon__disabled : ""
          } ${styles.move}`}
        >
          <HiMiniChevronLeft />
        </button>
        {length > maxPage ? (
          Array.from({ length: maxPage }, (_, i) => (
            <button
              onClick={() => setPage(i + 1)}
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
                onClick={() => setPage(page + i)}
                disabled={i === 0}
                className={`${styles.number} ${styles.move} ${
                  i === 0 ? styles.number__active : ""
                }`}
                key={i}
              >
                {page + i}
              </button>
            )
          )
        ) : (
          <>
            <button
              onClick={() => setPage(1)}
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
                    onClick={() => setPage(maxPage - 3 + i)}
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
                    onClick={() => setPage(page + i)}
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
          onClick={() => setPage(page + 1)}
          className={`${styles.icon} ${
            !canGoNext ? styles.icon__disabled : ""
          } ${styles.move}`}
        >
          <HiMiniChevronRight />
        </button>
      </div>
      <button
        disabled={!canGoNext}
        onClick={() => setPage(maxPage)}
        className={`${styles.text} ${!canGoNext ? styles.text__disabled : ""}`}
      >
        Last
      </button>
    </nav>
  );
}

export default Pagination;
