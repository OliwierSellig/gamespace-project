"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./userSelector.module.scss";
import { HiMiniChevronDown } from "react-icons/hi2";
import Link from "next/link";

type UserSelectorProps = {
  list: { item: string; href: string }[];
  activeItem: { item: string; href: string };
  children: ReactNode;
  disabled?: boolean;
};

function UserSelector({
  list,
  children,
  activeItem,
  disabled = false,
}: UserSelectorProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  console.log(disabled);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    }

    addEventListener("scroll", () => setIsOpen(false));
    addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
    return () => {
      removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
      removeEventListener("scroll", () => setIsOpen(false));
    };
  }, []);

  return (
    <div className={disabled ? styles.disabled : ""}>
      <span className={styles.text}>{children} </span>
      <div className={styles.box} ref={selectorRef}>
        <button
          disabled={disabled}
          onClick={() => setIsOpen(true)}
          className={styles.btn}
        >
          <span>{activeItem ? activeItem.item : list.at(0)?.item}</span>
          <HiMiniChevronDown />
        </button>
        {isOpen && (
          <nav className={styles.nav}>
            {list.map((item, i) => (
              <Link
                key={i}
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
                href={item.href}
              >
                {item.item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

export default UserSelector;
