"use client";

import Link from "next/link";
import { useUser } from "../../../contexts/UserContext";
import styles from "./userNavigation.module.scss";

function UserNavigation({ children }) {
  const { getFavourites } = useUser();

  // -----------------------------------------------------
  // Setting a Random Background Image For The User Page
  // -----------------------------------------------------

  function getFavouriteBackground(list) {
    if (!list || !list.length) return `/img/user-background.webp`;
    const random = Math.ceil(Math.random() * list.length) - 1;
    const favGame = list.at(random);
    return favGame?.background_image;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(
      0deg,
      rgba(21, 21, 21, 1) 0%,
      rgba(21, 21, 21, 0.2) 50%,
      rgba(21, 21, 21, 0.4) 90%
    ),
    url(${getFavouriteBackground(getFavourites())})`,
        }}
        className={styles.background}
      >
        <nav className={styles.navigation}>
          <Link href="overview" className={styles.btn}>
            Overview
          </Link>
          <Link href="library" className={styles.btn}>
            Library
          </Link>
          <Link href="wishlist" className={styles.btn}>
            Wishlist
          </Link>
          <Link href="reviews" className={styles.btn}>
            Reviews
          </Link>
          <Link href="collections" className={styles.btn}>
            Collections
          </Link>
        </nav>
      </div>
      <main className={styles.container}>{children}</main>
    </>
  );
}

export default UserNavigation;
