import { useEffect, useState } from "react";
import styles from "./backgroundSwitcher.module.scss";
import Image from "next/image";
import heroBg0 from "../../../public/img/hero-background-0.webp";
import heroBg1 from "../../../public/img/hero-background-1.webp";
import heroBg2 from "../../../public/img/hero-background-2.webp";
import heroBg3 from "../../../public/img/hero-background-3.webp";
import heroBg4 from "../../../public/img/hero-background-4.webp";

const BACKGROUND_IMAGES_AMOUNT = 5;
const BACKGROUND_CHANGE_PERIOD = 8000;

function BackgroundSwitcher({ children }) {
  const [currentBackground, setCurrentBackground] = useState(0);

  function setBackground(iterator) {
    switch (iterator) {
      case 0:
        return heroBg0;
      case 1:
        return heroBg1;
      case 2:
        return heroBg2;
      case 3:
        return heroBg3;
      case 4:
        return heroBg4;
      default:
        throw new Error("No background of such index!");
    }
  }

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
        <Image
          className={`${styles.backgroundCover} ${
            currentBackground === i ? styles.visible : styles.hidden
          }`}
          priority
          src={setBackground(i)}
          alt={`Background Hero Image ${i}`}
          key={`Image ${i}`}
          fill
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
