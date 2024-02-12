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
      {list.length === 1 && (
        <div className={styles.singleContainer}>
          <SameSeriesCard game={list.at(0)} />
        </div>
      )}
      {list.length >= 2 && (
        <Swiper slidesPerView={amount} navigation spaceBetween={24}>
          {list.map((item) => (
            <SwiperSlide key={item.id}>
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
