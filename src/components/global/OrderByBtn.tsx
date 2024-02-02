"use client";

import { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useSearchParams } from "next/navigation";
import styles from "./orderByBtn.module.scss";

function OrderByBtn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const orderRef = useRef<HTMLButtonElement>(null);
  const params = useSearchParams();
  const orderTypes = [
    { name: "Relevance", slug: "relevance" },
    { name: "Rating", slug: "rating" },
    { name: "Popularity", slug: "popularity" },
    { name: "Released", slug: "released" },
  ];
  const currentOrder = orderTypes.find(
    (order) => order.slug === params["order"]
  ) || { name: "Relevance", slug: "relevance" };

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
      <p className={styles.header}>Order by:</p>
      <button
        ref={orderRef}
        className={styles.open}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.open__text}>{currentOrder.name}</span>
        <HiChevronDown />{" "}
      </button>
      <div className={`${styles.box} ${isOpen ? styles.box__open : ""}`}>
        <nav className={styles.nav}>
          {orderTypes.map((order, i) => (
            <button className={styles.pick} key={i}>
              {order.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default OrderByBtn;
