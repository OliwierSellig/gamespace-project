"use client";

import Link from "next/link";
import styles from "./rankingOrder.module.scss";
import { HiChevronDown } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

function RankingOrder() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const orderRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (orderRef.current && !orderRef.current.contains(e.target as Node))
        setIsOpen(false);
    }

    addEventListener("mousedown", (e: MouseEvent) => clickOutside(e));
    return () =>
      removeEventListener("mousedown", (e: MouseEvent) => clickOutside(e));
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.header}>Order Items</p>
      <button
        ref={orderRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.open}
      >
        <p className={styles.open__text}>Trending</p>
        <HiChevronDown />
      </button>
      <div className={`${styles.box} ${isOpen ? styles.box__open : ""}`}>
        <nav className={`${styles.nav} ${styles.nav__open}`}>
          <Link href="/ranking/trending" className={styles.pick}>
            Trending
          </Link>
          <Link href="/ranking/rated" className={styles.pick}>
            Top Rated
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default RankingOrder;
