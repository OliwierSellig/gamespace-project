import { NavLink } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import styles from "./userNavigation.module.scss";

function UserNavigation({ children }) {
  const { getFavourites } = useUser();

  // -----------------------------------------------------
  // Setting a Random Background Image For The User Page
  // -----------------------------------------------------

  function getFavouriteBackground(list) {
    if (!list || !list.length) return `/img/user-background.jpg`;
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
          <NavLink to="overview" className={styles.btn}>
            Overview
          </NavLink>
          <NavLink to="library" className={styles.btn}>
            Library
          </NavLink>
          <NavLink to="wishlist" className={styles.btn}>
            Wishlist
          </NavLink>
          <NavLink to="reviews" className={styles.btn}>
            Reviews
          </NavLink>
          <NavLink to="collections" className={styles.btn}>
            Collections
          </NavLink>
        </nav>
      </div>
      <main className={styles.container}>{children}</main>
    </>
  );
}

export default UserNavigation;
