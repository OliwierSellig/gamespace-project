"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./pageNav.module.scss";

type PageNavProps = {
  list: { name: string; url: string }[];
};

function PageNav({ list }: PageNavProps) {
  const pathname = usePathname();
  const currentPath = pathname.split("/").at(-1);
  const activeLink = list.find(
    (page) => page.url.split("/").at(-1) === currentPath,
  );

  const lineStyles = activeLink
    ? {
        left: `${
          list.findIndex((list) => list.url === activeLink.url) *
          (100 / list.length)
        }%`,
        width: `${100 / list.length}%`,
      }
    : { display: "none" };

  return (
    <nav className={styles.container}>
      {list.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className={`${styles.link} ${
            activeLink && activeLink.url === item.url ? styles.link__active : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
      <div className={styles.line} style={lineStyles} />
    </nav>
  );
}

export default PageNav;
