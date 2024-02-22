"use client";

import { usePathname } from "next/navigation";
import UserPageLink from "./UserPageLink";
import styles from "./pagesNav.module.scss";

const pages = [
  { url: "overview", name: "Overview" },
  { url: "library", name: "Library" },
  { url: "wishlist", name: "Wishlist" },
  { url: "reviews", name: "Reviews" },
  { url: "collections", name: "Collections" },
];

function PagesNav() {
  const pathname = usePathname();
  const currentPath = pathname.split("/").at(-1);
  const activeLink = pages.find((page) => page.url === currentPath) || {
    url: "overview",
    name: "Overview",
  };

  return (
    <nav className={styles.container}>
      {pages.map((page) => (
        <UserPageLink
          isActive={activeLink.url === page.url}
          href={page.url}
          key={page.url}
        >
          {page.name}
        </UserPageLink>
      ))}
      <div
        className={styles.line}
        style={{
          left: `${
            pages.findIndex((page) => page.url === activeLink.url) *
            (100 / pages.length)
          }%`,
        }}
      />
    </nav>
  );
}

export default PagesNav;
