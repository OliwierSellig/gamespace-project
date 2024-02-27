import SwiperComponent from "../../../global/SwiperComponent";
import OverviewSectionContainer from "../layout/OverviewSectionContainer";
import DataCol from "./DataCol";

const devList = [
  { name: "Ubisoft Montreal", href: "/", count: 5 },
  { name: "Ubisoft", href: "/", count: 4 },
  { name: "Rockstar Games", href: "/", count: 3 },
  { name: "Electronic Arts", href: "/", count: 3 },
  { name: "CD Projekt Red", href: "/", count: 2 },
];

const genreList = [
  { name: "Action", href: "/", count: 9 },
  { name: "RPG", href: "/", count: 5 },
  { name: "Adventure", href: "/", count: 3 },
  { name: "Indie", href: "/", count: 3 },
  { name: "Massive Multiplayer", href: "/", count: 1 },
];

function DataContainer() {
  return (
    <OverviewSectionContainer>
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
    </OverviewSectionContainer>
  );
}

export default DataContainer;
