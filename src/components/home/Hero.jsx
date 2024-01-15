import Link from "next/link";
import BackgroundSwitcher from "./BackgroundSwitcher";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <BackgroundSwitcher>
      <div className={styles.content}>
        <h1 className="heading-primary">Welcome to GameSpace</h1>
        <p className={styles.subheading}>
          A place where you can find any game you&apos;ve ever played, or will
          play. Find your game of choice and share your opinion with the world!
        </p>
        <div className={styles.btnContainer}>
          <Link href="search" className={`${styles.btn} ${styles.btn__search}`}>
            Search Games
          </Link>
          <Link href="browse" className={`${styles.btn} ${styles.btn__browse}`}>
            Browse
          </Link>
        </div>
      </div>
    </BackgroundSwitcher>
  );
}

export default Hero;
