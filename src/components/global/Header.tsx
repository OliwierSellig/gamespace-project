"use client";

import { useEffect, useState } from "react";
import {
  HiOutlineMagnifyingGlass,
  HiBars3,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import user from "../../../public/img/user.webp";
import Logo from "./Logo";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  isFixed?: boolean;
};

function Header({ isFixed = true }: HeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // ---------------------------------------------
  // Changing Background Color on Scroll
  // ---------------------------------------------

  useEffect(() => {
    function setHeaderBackground() {
      if (
        (isActive && window.scrollY >= 80) ||
        (!isActive && window.scrollY < 80)
      )
        return;
      if (window.scrollY >= 80) setIsActive(true);
      else setIsActive(false);
    }

    window.addEventListener("scroll", setHeaderBackground);
    function dispatch() {
      window.removeEventListener("scroll", setHeaderBackground);
    }

    return dispatch;
  }, [isActive]);

  useEffect(() => {
    function checkNavOpen() {
      if (window.innerWidth > 660 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    }

    window.addEventListener("resize", checkNavOpen);
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (isMobileNavOpen) document.documentElement.classList.add("locked");
    else document.documentElement.classList.remove("locked");
  }, [isMobileNavOpen]);

  return (
    <header
      className={`${styles.header} ${isFixed ? styles.header__fixed : ""} ${
        isActive && isFixed ? styles.header__active : ""
      }`}
    >
      <nav className={styles.navlinks__left}>
        <Logo />
        <div className={styles.navlinks__sub}>
          <Link className={styles.link} href="/ranking/trending">
            Trending
          </Link>
          <Link className={styles.link} href="/ranking/rated">
            Top Games
          </Link>
          <Link className={styles.link} href="/browse">
            Browse
          </Link>
        </div>
      </nav>
      <nav className={styles.navlinks__right}>
        <Link className={styles.icon} href="/search" aria-label="Go to search">
          <HiOutlineMagnifyingGlass />
        </Link>
        <Link
          className={styles.user}
          href="/user/overview"
          aria-label="Go to user profile"
        >
          <Image fill src={user} alt="User Avatar" />
          <div className={styles.user__box}>
            <FaRegUser />
          </div>
        </Link>
        <Link
          className={`${styles.icon} ${styles.icon__settings}`}
          aria-label="Go to setting"
          href="/"
        >
          <HiOutlineCog6Tooth />
        </Link>
        <button
          className={`${styles.icon} ${styles.icon__menu}`}
          onClick={() => setIsMobileNavOpen(true)}
          aria-label="Open mobile nav"
        >
          <HiBars3 />
        </button>
      </nav>
      {isMobileNavOpen && (
        <nav
          className={styles.mobile}
          onClick={() => setIsMobileNavOpen(false)}
        >
          <Link
            className={`${styles.link} ${styles.link__mobile}`}
            href="/ranking/trending"
          >
            Trending
          </Link>
          <Link
            className={`${styles.link} ${styles.link__mobile}`}
            href="/ranking/rated"
          >
            Top Games
          </Link>
          <Link
            className={`${styles.link} ${styles.link__mobile}`}
            href="/browse"
          >
            Browse
          </Link>
          <Link className={`${styles.link} ${styles.link__mobile}`} href="/">
            Settings
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
