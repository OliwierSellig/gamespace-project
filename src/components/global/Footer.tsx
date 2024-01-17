import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./footer.module.scss";

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
        <Logo pos="footer" />
        <p className={styles.copyright}>
          &copy; GameSpace {new Date().getFullYear()}
        </p>
        <ul className={styles.socials}>
          <li>
            <a
              className={styles.icon}
              href="https://www.facebook.com/profile.php?id=100014860652231&locale=pl_PL"
              aria-label="Check our Facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              className={styles.icon}
              href="https://www.instagram.com/oliwier_sellig/"
              aria-label="Check our Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              className={styles.icon}
              href="https://www.youtube.com/"
              aria-label="See our Youtube"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              className={styles.icon}
              href="https://twitter.com/home?lang=pl"
              aria-label="See our Twitter"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
