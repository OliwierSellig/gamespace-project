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
          slidesPerView: 3,
          spaceBetween: 24,
          navigation: true,
          pagination: false,
        },
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
