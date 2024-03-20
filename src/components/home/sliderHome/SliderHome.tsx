import { ReactElement } from "react";
import Slider from "../../global/slider/Slider";
import SectionHeading from "../sectionHeading/SectionHeading";
import styles from "./siderHome.module.scss";

type SliderHomeProps = {
  children: ReactElement[];
  heading: string;
};

function SliderHome({ children, heading }: SliderHomeProps) {
  return (
    <div className={styles.container}>
      <SectionHeading>{heading}</SectionHeading>
      <Slider
        gap={2}
        itemSizes={{
          default: 35,
          minWidth: 48,
          maxWidth: 65,
        }}
      >
        {children}
      </Slider>
    </div>
  );
}

export default SliderHome;
