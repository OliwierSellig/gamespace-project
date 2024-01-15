import Logo from "./Logo";
import styles from "./footer.module.scss";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/">
            About Us
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/">
            Become an investor
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/">
            Terms of use
          </Link>
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/">
            Help Center
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/">
            Contact us
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/">
            Jobs
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/">
            Cookie Preferences
          </Link>
        </li>
      </ul>
      <nav className={styles.additional}>
        <Logo additionalClass="logo__footer" />
        <p className={styles.copyright}>
          &copy; GameSpace {new Date().getFullYear()}
        </p>
        <ul className={styles.socials}>
          <li>
            <Link
              className={styles.icon}
              href="/"
              aria-label="See our Facebook"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link
              className={styles.icon}
              href="/"
              aria-label="See out Instagram"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link className={styles.icon} href="/" aria-label="See our Youtube">
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link className={styles.icon} href="/" aria-label="See our Twitter">
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
