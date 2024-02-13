"use client";

import { FetchedGameItem } from "../../utils/types";
import styles from "./sameSeriesSlider.module.scss";
import SameSeriesCard from "./SameSeriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SameSeriesNavigation from "./SameSeriesNavigation";

type SameSeriesSliderProps = {
  list: FetchedGameItem[];
  amount?: number;
  isSameSeries: boolean;
};

function SameSeriesSlider({
  list,
  amount = 2,
  isSameSeries,
}: SameSeriesSliderProps) {
  return (
    <div className={styles.carousel}>
      <h3 className={styles.heading}>
        {isSameSeries ? "Other games from the series" : "You may also like"}
      </h3>
      {(!list || !list.length) && (
        <p className={styles.empty}>
          We couldn&apos;t find any games, sorry...
        </p>
      )}
      {list.length === 1 && (
        <div className={styles.singleContainer}>
          <SameSeriesCard game={list.at(0)} />
        </div>
      )}
      {list.length >= 2 && (
        <Swiper
          slidesPerView={1}
          navigation
          spaceBetween={24}
          breakpoints={{
            480: {
              slidesPerView: amount,
            },
          }}
        >
          {list.map((item, i) => (
            <SwiperSlide key={i}>
              <SameSeriesCard game={item} />
            </SwiperSlide>
          ))}
          <SameSeriesNavigation />
        </Swiper>
      )}
    </div>
  );
}

export default SameSeriesSlider;
