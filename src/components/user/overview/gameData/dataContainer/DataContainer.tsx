"use client";

import { useLibrary } from "../../../../../contexts/libraryContext/LibraryContext";
import SwiperComponent from "../../../../global/swiperComponent/SwiperComponent";
import OverviewSectionContainer from "../../layout/overviewSectionContainer/OverviewSectionContainer";
import DataCol from "../dataCol/DataCol";
import OverviewVideo from "../overviewVideo/OverviewVideo";

function DataContainer() {
  const { getFilteredList } = useLibrary();

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
          <DataCol
            data={{ type: "Developers", list: getFilteredList("developers") }}
          />
          <DataCol data={{ type: "Genres", list: getFilteredList("genres") }} />
        </SwiperComponent>
      </div>
    </OverviewSectionContainer>
  );
}

export default DataContainer;
