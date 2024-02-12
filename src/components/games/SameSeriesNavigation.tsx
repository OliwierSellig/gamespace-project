import { useSwiper } from "swiper/react";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import styles from "./sameSeriesNavigation.module.scss";
import { useEffect, useState } from "react";

function SameSeriesNavigation() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swiper = useSwiper();

  useEffect(() => {
    const handleSlideChange = () => {
      setCurrentIndex(swiper.realIndex);
    };

    if (swiper) {
      swiper.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiper) {
        swiper.off("slideChange", handleSlideChange);
      }
    };
  }, [swiper]);

  return (
    <>
      <button
        disabled={currentIndex <= 0}
        aria-label="Swipe Left"
        onClick={() => swiper.slidePrev()}
        className={`${currentIndex <= 0 ? styles.btn__disabled : ""} ${
          styles.btn
        } ${styles.btn__prev}`}
      >
        <HiMiniChevronLeft />
      </button>
      <button
        disabled={currentIndex >= swiper.slides.length - 2}
        aria-label="Swipe Right"
        onClick={() => swiper.slideNext()}
        className={`${
          currentIndex >= swiper.slides.length - 2 ? styles.btn__disabled : ""
        } ${styles.btn} ${styles.btn__next}`}
      >
        <HiMiniChevronRight />
      </button>
      <nav className={styles.pagination}>
        {Array.from({ length: swiper.slides.length - 1 }, (_, i) => (
          <button
            onClick={() => swiper.slideTo(i)}
            key={i}
            aria-label={`Set slide to ${i}`}
            className={`${styles.pagination__btn} ${
              currentIndex === i ? styles.pagination__active : ""
            }`}
          />
        ))}
      </nav>
    </>
  );
}

export default SameSeriesNavigation;
