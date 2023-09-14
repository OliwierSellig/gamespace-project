import { NavLink } from "react-router-dom";
import styles from "./redirect.module.scss";

function Redirect() {
  return (
    <section className={styles.redirect}>
      <h2 className={styles.heading}>Redirect to:</h2>
      <nav className={styles.container}>
        <NavLink to="trending" className={styles.link}>
          Trending
        </NavLink>
        <NavLink to="rated" className={styles.link}>
          Top Rated
        </NavLink>
      </nav>
    </section>
  );
}

export default Redirect;
