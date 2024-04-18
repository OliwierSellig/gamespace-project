"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import styles from "./pageNav.module.scss";

type ObjectItem =
  | { name: string; url: string }
  | { name: string; handleClick: () => void; isActive: boolean };

type PageNavProps = {
  list:
    | { name: string; url: string }[]
    | { name: string; handleClick: () => void; isActive: boolean }[];
};

function PageNav({ list }: PageNavProps) {
  const pathname = usePathname();
  const currentPath = pathname.split("/").at(-1);
  const activeLink = list.find((page) =>
    "url" in page ? page.url.split("/").at(-1) === currentPath : page.isActive,
  );

  const lineStyles = activeLink
    ? {
        left: `${
          list.findIndex((item: ObjectItem) => item.name === activeLink.name) *
          (100 / list.length)
        }%`,
        width: `${100 / list.length}%`,
      }
    : { display: "none" };

  function getItemClass(item: { name: string }) {
    return `${styles.link} ${
      activeLink && activeLink.name === item.name ? styles.link__active : ""
    }`;
  }

  return (
    <nav className={styles.container}>
      {list.map((item: ObjectItem, i) => (
        <Fragment key={i}>
          {"url" in item ? (
            <Link href={item.url} className={getItemClass(item)}>
              {item.name}
            </Link>
          ) : (
            <button
              onClick={() => item.handleClick()}
              className={getItemClass(item)}
            >
              {item.name}
            </button>
          )}
        </Fragment>
      ))}
      <div className={styles.line} style={lineStyles} />
    </nav>
  );
}

export default PageNav;
