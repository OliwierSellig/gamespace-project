import { ReactElement } from "react";
import Slider from "../global/Slider";
import styles from "./siderHome.module.scss";

type SliderHomeProps = {
  children: ReactElement;
  heading: string;
};

function SliderHome({ children, heading }: SliderHomeProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <Slider
        gap={2}
        itemSizes={{
          default: 35,
          sizes: [
            { itemSize: 30, windowWidth: 1400 },
            { itemSize: 60, windowWidth: 800 },
          ],
        }}
      >
        {children}
      </Slider>
    </div>
  );
}

export default SliderHome;
