import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./header.module.scss";
import { useEffect, useRef, useState } from "react";

function Header({ isFixed = true }) {
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

  return (
    <header
      className={`${styles.header} ${isFixed ? styles.header__fixed : ""} ${
        isActive && isFixed ? styles.header__active : ""
      }`}
    >
      <nav className={styles.navlinks__left}>
        <Logo additionalClass="logo--header" />
        <div className={styles.navlinks__sub}>
          <NavLink className={styles.link} to="/ranking/trending">
            Trending
          </NavLink>
          <NavLink className={styles.link} to="/ranking/rated">
            Top Games
          </NavLink>
          <NavLink className={styles.link} to="/browse">
            Browse
          </NavLink>
        </div>
      </nav>
      <nav className={styles.navlinks__right}>
        <NavLink className={styles.icon} to="/search">
          <img
            className={styles.loopIcon}
            src="/svg/loop.svg"
            alt="Loop icon"
          />
        </NavLink>
        <NavLink className={styles.icon} to="/user/overview">
          <img
            className={styles.userPhoto}
            src="/img/user.webp"
            alt="User Avatar"
          />
        </NavLink>
        <NavLink className={`${styles.icon} ${styles.icon__settings}`} to="/">
          <img
            className={styles.settingsIcon}
            src="/svg/settings.svg"
            alt="Setting icon"
          />
        </NavLink>
        <button
          className={`${styles.icon} ${styles.icon__menu}`}
          onClick={() => setIsMobileNavOpen(true)}
        >
          <img
            className={styles.settingsIcon}
            src="/svg/hamburger-menu.svg"
            alt="Setting icon"
          />
        </button>
      </nav>
      {isMobileNavOpen && (
        <nav
          className={styles.mobile}
          onClick={() => setIsMobileNavOpen(false)}
        >
          <NavLink
            className={`${styles.link} ${styles.link__mobile}`}
            to="/ranking/trending"
          >
            Trending
          </NavLink>
          <NavLink
            className={`${styles.link} ${styles.link__mobile}`}
            to="/ranking/rated"
          >
            Top Games
          </NavLink>
          <NavLink
            className={`${styles.link} ${styles.link__mobile}`}
            to="/browse"
          >
            Browse
          </NavLink>
          <NavLink className={`${styles.link} ${styles.link__mobile}`} to="/">
            Settings
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
