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
          { minWidth: 425, slidesPerView: 1.5 },
        ],
      }}
    >
      {list.map((item) => (
        <GameLibraryItem
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
