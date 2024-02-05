"use client";

import { useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import styles from "./orderByBtn.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type OrderByBtnProps = {
  order: string;
};

function OrderByBtn({ order: o }: OrderByBtnProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const orderRef = useRef<HTMLButtonElement>(null);
  const orderTypes = [
    { name: "Relevance", slug: "relevance" },
    { name: "Rating", slug: "rating" },
    { name: "Popularity", slug: "popularity" },
    { name: "Released", slug: "released" },
  ];
  const currentOrder = orderTypes.find((order) => order.slug === o) || {
    name: "Relevance",
    slug: "relevance",
  };
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (orderRef.current && !orderRef.current.contains(e.target as Node))
        setIsOpen(false);
    }

    addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
    return () =>
      removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
  }, []);

  function setOrder(o: string) {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set("order", o);
    const order = current.toString();
    const query = order ? `?${order}` : "";
    router.push(`${pathname}${query}`);
  }

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
            <button
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setOrder(order.slug)}
              className={styles.pick}
              key={i}
            >
              {order.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default OrderByBtn;
