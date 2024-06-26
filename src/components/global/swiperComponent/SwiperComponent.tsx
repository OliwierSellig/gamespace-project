"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./swiperComponent.module.scss";

type SwiperProps = {
  children: ReactNode;
  navigation?: boolean;
  pagination?: boolean;
  props: {
    default: {
      slidesPerView: number;
      spaceBetween: number;
      navigation?: boolean;
      pagination?: boolean;
      keyboard?: boolean;
      loop?: boolean;
    };
    breakpoints?: {
      minWidth: number;
      slidesPerView?: number;
      spaceBetween?: number;
    }[];
  };
  onInit?: (swiper) => void;
  externalSlide?: number;
  setExtSlide?: (num: number) => void;
  allowSwipeNext?: boolean;
};

function SwiperComponent({
  children,
  props,
  onInit,
  externalSlide,
  setExtSlide,
  allowSwipeNext = true,
}: SwiperProps) {
  const breakpointsObj = {};
  if (props.breakpoints)
    props.breakpoints.forEach((breakpoint) => {
      breakpointsObj[breakpoint.minWidth] = {
        slidesPerView: breakpoint.slidesPerView || props.default.slidesPerView,
        spaceBetween: breakpoint.spaceBetween || props.default.spaceBetween,
      };
    });

  const childArray = React.Children.toArray(children);
  return (
    <Swiper
      allowSlideNext={allowSwipeNext}
      keyboard={{ enabled: Boolean(props.default.keyboard) }}
      onSwiper={(swiper) => onInit?.(swiper)}
      className={styles.swiper}
      slidesPerView={props.default.slidesPerView}
      spaceBetween={props.default.spaceBetween}
      loop={Boolean(props.default.loop)}
      breakpoints={breakpointsObj}
      modules={[Keyboard]}
    >
      {childArray.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
      <SwiperNavigation
        navigation={Boolean(props.default.navigation)}
        pagination={Boolean(props.default.pagination)}
        loop={Boolean(props.default.loop)}
        externalSlide={externalSlide}
        setExtSlide={setExtSlide}
        allowSwipeNext={allowSwipeNext}
      />
    </Swiper>
  );
}

type SwiperNavigationProps = {
  navigation: boolean;
  pagination: boolean;
  loop: boolean;
  externalSlide: number;
  setExtSlide: (num: number) => void;
  allowSwipeNext: boolean;
};

function SwiperNavigation({
  navigation,
  pagination,
  loop,
  externalSlide,
  setExtSlide,
  allowSwipeNext,
}: SwiperNavigationProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swiper = useSwiper();
  const paginationLength =
    swiper.slides.length - swiper.slidesPerViewDynamic() + 1;

  useEffect(() => {
    if (!externalSlide && externalSlide !== 0) return;
    if (!swiper.destroyed) {
      swiper.allowSlideNext = true;
      swiper.slideTo(externalSlide);
      swiper.allowSlideNext = allowSwipeNext;
    }
  }, [externalSlide, swiper, allowSwipeNext]);

  useEffect(() => {
    function handleSlideChange() {
      setExtSlide(swiper.activeIndex);
    }
    if (!externalSlide && externalSlide !== 0) return;

    if (swiper) {
      swiper.on("slideChange", () => handleSlideChange());
    }

    return () => {
      swiper.off("slideChange", () => handleSlideChange);
    };
  }, [setExtSlide, swiper, externalSlide]);

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
      {navigation && (
        <>
          <button
            disabled={!loop && currentIndex <= 0}
            aria-label="Swipe Left"
            onClick={() => swiper.slidePrev()}
            className={`${
              !loop && currentIndex <= 0 ? styles.btn__disabled : ""
            } ${styles.btn} ${styles.btn__prev}`}
          >
            <HiMiniChevronLeft />
          </button>
          <button
            disabled={!loop && currentIndex >= swiper.slides.length - 2}
            aria-label="Swipe Right"
            onClick={() => swiper.slideNext()}
            className={`${
              !loop && currentIndex >= swiper.slides.length - 2
                ? styles.btn__disabled
                : ""
            } ${styles.btn} ${styles.btn__next}`}
          >
            <HiMiniChevronRight />
          </button>
        </>
      )}
      {pagination && swiper.slides.length > 2 && (
        <nav className={styles.pagination}>
          {Array.from({ length: paginationLength }, (_, i) => (
            <button
              onClick={() => (loop ? swiper.slideToLoop(i) : swiper.slideTo(i))}
              key={i}
              aria-label={`Set slide to ${i}`}
              className={`${styles.pagination__btn} ${
                currentIndex === i ? styles.pagination__active : ""
              }`}
            ></button>
          ))}
        </nav>
      )}
    </>
  );
}

export default SwiperComponent;
