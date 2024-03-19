"use client";

import { useEffect, useState } from "react";
import styles from "./backgroundSwitcher.module.scss";
import Image from "next/image";
import { ChildrenProp } from "../../../../utils/types";
import { heroImages } from "../../../../utils/data/home";

const BACKGROUND_CHANGE_PERIOD = 8000;

function BackgroundSwitcher({ children }: ChildrenProp) {
  const [currentBackground, setCurrentBackground] = useState<number>(0);

  // ---------------------------------------
  // Switching Beetwen Background Images
  // ---------------------------------------

  useEffect(() => {
    function switchBackground() {
      if (Number(currentBackground) === heroImages.length - 1)
        setCurrentBackground(0);
      else setCurrentBackground((prev) => prev + 1);
    }

    const switchBackgroundInterval = setTimeout(
      () => switchBackground(),
      BACKGROUND_CHANGE_PERIOD
    );

    function clearSwitch() {
      clearTimeout(switchBackgroundInterval);
    }

    return clearSwitch;
  }, [currentBackground]);

  return (
    <section className={styles.container}>
      {heroImages.map((img, i) => (
        <Image
          className={`${styles.backgroundCover} ${
            currentBackground === i ? styles.visible : styles.hidden
          }`}
          priority
          src={img}
          alt={`Background Hero Image ${i}`}
          key={i}
          fill
        />
      ))}

      <nav className={styles.navBox}>
        {Array.from({ length: heroImages.length }, (_, i) => (
          <button
            onClick={() => setCurrentBackground(i)}
            className={`${styles.navDot} ${
              currentBackground === i ? styles.navDot__active : ""
            }`}
            key={i}
          />
        ))}
      </nav>
      {children}
    </section>
  );
}

export default BackgroundSwitcher;
