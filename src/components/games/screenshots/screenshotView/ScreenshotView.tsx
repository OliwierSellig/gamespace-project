import { SingleScreenshotItem } from "../../../../utils/types/types";
import styles from "./screenshotView.module.scss";
import Image from "next/image";
import notFound from "../../../../../public/img/not-found.png";
import SwiperComponent from "../../../global/swiperComponent/SwiperComponent";

type ScreenshotViewProps = {
  currentScreenshot: number;
  list: SingleScreenshotItem[];
};

function ScreenshotView({ currentScreenshot, list }: ScreenshotViewProps) {
  const handleSwiperInit = (swiper) => {
    if (swiper) {
      swiper.slideTo(currentScreenshot, 0, false);
    }
  };

  return (
    <div className={styles.container}>
      <SwiperComponent
        props={{
          default: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: true,
            navigation: true,
            keyboard: true,
          },
        }}
        onInit={handleSwiperInit}
      >
        {list.map((item) => (
          <div className={styles.box} key={item.id}>
            <Image
              src={item.image || notFound}
              alt={`Screenshot ${item.id}`}
              fill
              sizes="95vw"
            />
          </div>
        ))}
      </SwiperComponent>
    </div>
  );
}

export default ScreenshotView;
