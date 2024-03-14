"use client";

import { FetchedGameItem } from "../../../utils/types";
import GameSectionHeading from "../layout/GameSectionHeading";
import SameSeriesList from "./SameSeriesList";
import styles from "./sameSeriesSlider.module.scss";

type SameSeriesSliderProps = {
  list: FetchedGameItem[];
  isSameSeries: boolean;
};

function SameSeriesSlider({ list, isSameSeries }: SameSeriesSliderProps) {
  return (
    <div className={styles.carousel}>
      <GameSectionHeading>
        {isSameSeries ? "Other games from the series" : "You may also like"}
      </GameSectionHeading>
      <SameSeriesList list={list} />
    </div>
  );
}

export default SameSeriesSlider;
