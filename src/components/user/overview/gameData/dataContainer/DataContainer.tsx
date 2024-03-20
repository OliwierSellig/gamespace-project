"use client";

import { useUser } from "../../../../../contexts/UserContext";
import SwiperComponent from "../../../../global/swiperComponent/SwiperComponent";
import OverviewSectionContainer from "../../layout/overviewSectionContainer/OverviewSectionContainer";
import DataCol from "../dataCol/DataCol";
import OverviewVideo from "../overviewVideo/OverviewVideo";

function DataContainer() {
  const { genreList, devList } = useUser();

  return (
    <OverviewSectionContainer>
      <div style={{ position: "relative" }}>
        <OverviewVideo />
        <SwiperComponent
          props={{
            default: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            breakpoints: [{ minWidth: 1024, slidesPerView: 2 }],
          }}
        >
          <DataCol data={{ type: "Developers", list: devList }} />
          <DataCol data={{ type: "Genres", list: genreList }} />
        </SwiperComponent>
      </div>
    </OverviewSectionContainer>
  );
}

export default DataContainer;
