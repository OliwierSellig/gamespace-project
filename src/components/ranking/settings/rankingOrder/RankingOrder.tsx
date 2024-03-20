"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import styles from "./rankingOrder.module.scss";

type RankingOrderProps = {
  order: string;
};

function RankingOrder({ order }: RankingOrderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const orderRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (orderRef.current && !orderRef.current.contains(e.target as Node))
        setIsOpen(false);
    }

    addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
    return () =>
      removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.header}>Order Items</p>
      <button
        ref={orderRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.open}
      >
        <p className={styles.open__text}>
          {order === "trending" ? "Trending" : "Top Rated"}
        </p>
        <HiChevronDown />
      </button>
      <div className={`${styles.box} ${isOpen ? styles.box__open : ""}`}>
        <nav className={styles.nav}>
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
