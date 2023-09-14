import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.link}>About Us</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Become an investor</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Terms of use</NavLink>
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.link}>Help Center</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Contact us</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Jobs</NavLink>
        </li>
        <li>
          <NavLink className={styles.link}>Cookie Preferences</NavLink>
        </li>
      </ul>
      <nav className={styles.additional}>
        <Logo additionalClass="logo__footer" />
        <p className={styles.copyright}>
          &copy; GameSpace {new Date().getFullYear()}
        </p>
        <ul className={styles.socials}>
          <li>
            <NavLink className={styles.icon}>
              <img
                className={styles.icon__img}
                src="/svg/facebook.svg"
                alt="Facebook Icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.icon}>
              <img
                className={styles.icon__img}
                src="/svg/instagram.svg"
                alt="Instagram Icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.icon}>
              <img
                className={styles.icon__img}
                src="/svg/youtube.svg"
                alt="Youtube Icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.icon}>
              <img
                className={styles.icon__img}
                src="/svg/twitter.svg"
                alt="Twitter Icon"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
