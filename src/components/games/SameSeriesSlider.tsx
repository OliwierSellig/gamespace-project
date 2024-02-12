"use client";

import { FetchedGameItem } from "../../utils/types";
import styles from "./sameSeriesSlider.module.scss";
import SameSeriesCard from "./SameSeriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SameSeriesNavigation from "./SameSeriesNavigation";

type SameSeriesSliderProps = {
  list: FetchedGameItem[];
  amount?: number;
};

function SameSeriesSlider({ list, amount = 2 }: SameSeriesSliderProps) {
  return (
    <div className={styles.carousel}>
      <h3 className={styles.heading}>Other games from the series</h3>
      <Swiper slidesPerView={amount} navigation spaceBetween={24}>
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <SameSeriesCard game={item} />
          </SwiperSlide>
        ))}
        <SameSeriesNavigation />
      </Swiper>
    </div>
  );
}

export default SameSeriesSlider;
