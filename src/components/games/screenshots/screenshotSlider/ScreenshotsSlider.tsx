import { SingleScreenshotItem } from "../../../../utils/types/types";
import Slider from "../../../global/slider/Slider";
import GameSectionHeading from "../../layout/gameSectionHeading/GameSectionHeading";
import ScreenshotCard from "../screenshotCard/ScreenshotCard";
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
