"use client";

import { useUser } from "../../../../contexts/UserContext";
import SwiperComponent from "../../../global/SwiperComponent";
import EmptyYearItem from "./EmptyYearItem";
import YearsItem from "./YearsItem";

function YearsSwiper() {
  const { getCommonYearList } = useUser();

  const yearList = getCommonYearList();
  console.log(getCommonYearList());
  const emptySlotsCount = Math.max(0, 3 - yearList.length);
  console.log(emptySlotsCount);
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
        <EmptyYearItem key={i} />
      ))}
    </SwiperComponent>
  );
}

export default YearsSwiper;
