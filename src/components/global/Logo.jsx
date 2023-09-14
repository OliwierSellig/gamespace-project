import { NavLink } from "react-router-dom";
import styles from "./logo.module.scss";

function Logo({ additionalClass }) {
  return (
    <NavLink
      className={`${styles.logo} ${
        additionalClass ? styles[additionalClass] : ""
      }`}
      to="/"
    >
      <span>Game</span>
      <span className={styles.space}>Space</span>
    </NavLink>
  );
}

export default Logo;
