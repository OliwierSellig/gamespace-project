import { SingleScreenshotItem } from "../../../utils/types";
import Slider from "../../global/Slider";
import GameSectionHeading from "../layout/GameSectionHeading";
import ScreenshotCard from "./ScreenshotCard";
import styles from "./screenshotsSlider.module.scss";

type ScreenshotSliderProps = {
  list: SingleScreenshotItem[];
};

function ScreenshotsSlider({ list }: ScreenshotSliderProps) {
  return (
    <div className={styles.container}>
      <GameSectionHeading>Game Screenshots</GameSectionHeading>
      <Slider
        itemSizes={{
          default: 40,
          minWidth: 56,
          maxWidth: 90,
        }}
        gap={2.4}
      >
        {list.map((item, i) => (
          <div key={item.id}>
            <ScreenshotCard list={list} index={i} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ScreenshotsSlider;
