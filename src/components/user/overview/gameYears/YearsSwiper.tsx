"use client";

import { useUser } from "../../../../contexts/UserContext";
import SwiperComponent from "../../../global/SwiperComponent";
import EmptyUserSwiperItem from "../../locale/emptyUserSliderItem/EmptyYearItem";
import YearsItem from "./YearsItem";

function YearsSwiper() {
  const { getCommonYearList } = useUser();
  const yearList = getCommonYearList();
  const emptySlotsCount = Math.max(0, 3 - yearList.length);

  return (
    <SwiperComponent
      props={{
        default: {
          slidesPerView: 1,
          spaceBetween: 24,
          loop: yearList.length > 3,
          navigation: yearList.length > 3,
        },
        breakpoints: [
          { minWidth: 1024, slidesPerView: 3 },
          { minWidth: 560, slidesPerView: 2, spaceBetween: 16 },
          { minWidth: 460, slidesPerView: 1.5 },
        ],
      }}
    >
      {yearList.map((item, i) => (
        <YearsItem key={i} year={item.year} gameList={item.games} />
      ))}
      {Array.from({ length: emptySlotsCount }, (_, i) => (
        <EmptyUserSwiperItem
          additionalStyle={{ minHeight: "33.6rem" }}
          key={i}
        />
      ))}
    </SwiperComponent>
  );
}

export default YearsSwiper;
