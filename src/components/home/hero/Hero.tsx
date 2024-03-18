import BackgroundSwitcher from "./backgroundSwitcher/BackgroundSwitcher";
import styles from "./hero.module.scss";
import Button from "../../global/Button";

function Hero() {
  return (
    <BackgroundSwitcher>
      <div className={styles.content}>
        <h1 className={styles.heading}>Welcome to GameSpace</h1>
        <p className={styles.subheading}>
          A place where you can find any game you&apos;ve ever played, or will
          play. Find your game of choice and share your opinion with the world!
        </p>
        <div className={styles.btnContainer}>
          <Button
            style={{ name: "scale", shade: "light" }}
            borderRadius="sm"
            href={{ url: "search" }}
            sizeX="lg"
          >
            Search Games
          </Button>
          <Button
            style={{ name: "default", shade: "light" }}
            href={{ url: "browse" }}
            borderRadius="sm"
            sizeX="lg"
          >
            Browse
          </Button>
        </div>
      </div>
    </BackgroundSwitcher>
  );
}

export default Hero;
