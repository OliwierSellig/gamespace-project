"use client";

import { FetchedGameItem } from "../../utils/types";
import styles from "./sameSeriesSlider.module.scss";
import SameSeriesCard from "./SameSeriesCard";
import SwiperComponent from "../global/SwiperComponent";

type SameSeriesSliderProps = {
  list: FetchedGameItem[];
  amount?: number;
  isSameSeries: boolean;
};

function SameSeriesSlider({ list, isSameSeries }: SameSeriesSliderProps) {
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
        <SwiperComponent
          props={{
            default: {
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: true,
              pagination: true,
            },
            breakpoints: [{ minWidth: 480, slidesPerView: 2 }],
          }}
        >
          {list.map((item) => (
            <SameSeriesCard key={item.id} game={item} />
          ))}
        </SwiperComponent>
      )}
    </div>
  );
}

export default SameSeriesSlider;
