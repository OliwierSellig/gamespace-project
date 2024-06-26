"use client";

import { useLibrary } from "../../../../../contexts/libraryContext/LibraryContext";
import SwiperComponent from "../../../../global/swiperComponent/SwiperComponent";
import EmptyUserSwiperItem from "../../../locale/emptyUserSwiperItem/EmptyUserSwiperItem";
import YearsItem from "../yearsItem/YearsItem";

function YearsSwiper() {
  const { getCommonYearList } = useLibrary();
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
