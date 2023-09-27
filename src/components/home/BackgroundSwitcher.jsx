import { useEffect, useState } from "react";
import styles from "./backgroundSwitcher.module.scss";

const BACKGROUND_IMAGES_AMOUNT = 5;
const BACKGROUND_CHANGE_PERIOD = 8000;

function BackgroundSwitcher({ children }) {
  const [currentBackground, setCurrentBackground] = useState(0);

  // ---------------------------------------
  // Switching Beetwen Background Images
  // ---------------------------------------

  useEffect(() => {
    function switchBackground(length) {
      if (Number(currentBackground) === length - 1) setCurrentBackground(0);
      else setCurrentBackground((c) => c + 1);
    }

    const switchBackgroundInterval = setTimeout(
      () => switchBackground(BACKGROUND_IMAGES_AMOUNT),
      BACKGROUND_CHANGE_PERIOD
    );

    function clearSwitch() {
      clearTimeout(switchBackgroundInterval);
    }

    return clearSwitch;
  }, [currentBackground]);

  return (
    <section className={styles.container}>
      {Array.from({ length: BACKGROUND_IMAGES_AMOUNT }, (_, i) => (
        <img
          className={`${styles.backgroundCover} ${
            currentBackground === i ? styles.visible : styles.hidden
          }`}
          srcSet={`img/heroBg/hero-background-${i}-small.webp 1200w, img/heroBg/hero-background-${i}-medium.webp 2000w, img/heroBg/hero-background-${i}-large.webp 3000w `}
          sizes="100vw"
          src={`img/heroBg/hero-background-${i}-medium.webp `}
          alt={`Background Hero Image ${i}`}
          loading="lazy"
          key={`Image ${i}`}
        />
      ))}
      <div className={styles.navBox}>
        {Array.from({ length: BACKGROUND_IMAGES_AMOUNT }, (_, i) => (
          <button
            onClick={() => setCurrentBackground(i)}
            className={`${styles.navDot} ${
              currentBackground === i ? styles.navDot__active : ""
            }`}
            key={`heroNavButton${i}`}
          />
        ))}
      </div>
      {children}
    </section>
  );
}

export default BackgroundSwitcher;
