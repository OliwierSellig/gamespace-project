"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HiBars3,
  HiOutlineCog6Tooth,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import Logo from "../../../logo/Logo";
import GoToUserProfile from "../goToUserProfile/GoToUserProfile";
import HeaderLink from "../headerLink/HeaderLink";
import styles from "./header.module.scss";

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
        <HeaderLink href="/search" label="Go to search">
          <HiOutlineMagnifyingGlass />
        </HeaderLink>
        <GoToUserProfile />
        <HeaderLink href="/" label="Go to settings">
          <HiOutlineCog6Tooth />
        </HeaderLink>
        <HeaderLink
          label="Open Mobile Navigation"
          handleClick={() => setIsMobileNavOpen(true)}
        >
          <HiBars3 />
        </HeaderLink>
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
