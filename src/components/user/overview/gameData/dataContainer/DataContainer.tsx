"use client";

import SwiperComponent from "../../../../global/SwiperComponent";
import OverviewSectionContainer from "../../layout/overviewSectionContainer/OverviewSectionContainer";
import OverviewVideo from "../overviewVideo/OverviewVideo";
import DataCol from "../dataCol/DataCol";
import { useUser } from "../../../../../contexts/UserContext";

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
