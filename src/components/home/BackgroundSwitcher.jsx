import { useEffect, useState } from "react";
import styles from "./backgroundSwitcher.module.scss";

function BackgroundSwitcher({ children }) {
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgroundImagesAmount = 5;

  useEffect(() => {
    function switchBackground(length) {
      if (Number(currentBackground) === length - 1) setCurrentBackground(0);
      else setCurrentBackground((c) => c + 1);
    }

    const switchBackgroundInterval = setTimeout(
      () => switchBackground(5),
      8000
    );

    function clearSwitch() {
      clearTimeout(switchBackgroundInterval);
    }

    return clearSwitch;
  }, [currentBackground]);

  return (
    <section className={styles.container}>
      {Array.from({ length: backgroundImagesAmount }, (_, i) => (
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
        {Array.from({ length: backgroundImagesAmount }, (_, i) => (
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
