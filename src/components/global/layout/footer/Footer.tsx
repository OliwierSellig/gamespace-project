import Link from "next/link";
import Logo from "../../logo/Logo";
import styles from "./footer.module.scss";
import { getSocialsByOrder } from "../../../../utils/functions/functions";

const pages1 = [
  "Abouts us",
  "Privacy Policy",
  "Become an Investor",
  "Terms of use",
];

const pages2 = ["Help Center", "Contact us", "Jobs", "Cookie Preferences"];

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.list}>
        {pages1.map((page) => (
          <Link className={styles.link} key={page} href="/">
            {page}
          </Link>
        ))}
      </nav>
      <nav className={styles.list}>
        {pages2.map((page) => (
          <Link className={styles.link} key={page} href="/">
            {page}
          </Link>
        ))}
      </nav>
      <div className={styles.additional}>
        <Logo pos="footer" />
        <p className={styles.copyright}>
          &copy; GameSpace {new Date().getFullYear()}
        </p>
        <nav className={styles.socials}>
          {getSocialsByOrder([
            "Facebook",
            "Instagram",
            "Youtube",
            "Twitter/X",
          ]).map((platform) => (
            <Link
              href={platform.url}
              key={platform.url}
              className={styles.icon}
              aria-label={`Check our ${platform.name}`}
            >
              <platform.icon />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
