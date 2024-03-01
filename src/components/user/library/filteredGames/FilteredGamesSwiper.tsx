import SwiperComponent from "../../../global/SwiperComponent";
import GameLibraryItem from "../../locale/gameLibraryItem/GameLibraryItem";

type FilteredGamesSwiperProps = {
  list: { name: string; id: number; cover: string }[];
};

function FilteredGamesSwiper({ list }: FilteredGamesSwiperProps) {
  return (
    <SwiperComponent
      props={{
        default: {
          slidesPerView: 1,
          spaceBetween: 16,
          navigation: true,
          pagination: false,
        },
        breakpoints: [
          { minWidth: 1024, slidesPerView: 3 },
          { minWidth: 560, slidesPerView: 2 },
          { minWidth: 500, slidesPerView: 1.5 },
          { minWidth: 425, slidesPerView: 1.2 },
        ],
      }}
    >
      {list.map((item) => (
        <GameLibraryItem
          imageSizes={{
            defalult: { number: 500, unit: "px" },
            sizes: [
              { maxWidth: 1600, size: { number: 33, unit: "vw" } },
              { maxWidth: 1024, size: { number: 46, unit: "vw" } },
              { maxWidth: 560, size: { number: 60, unit: "vw" } },
              { maxWidth: 500, size: { number: 75, unit: "vw" } },
              { maxWidth: 425, size: { number: 98, unit: "vw" } },
            ],
          }}
          cover={item.cover}
          key={item.id}
          name={item.name}
          id={item.id}
        />
      ))}
    </SwiperComponent>
  );
}

export default FilteredGamesSwiper;
