import { HiMiniBookmarkSlash } from "react-icons/hi2";
import { LibraryItemType } from "../../../../../utils/types/types";
import { useUser } from "../../../../../contexts/UserContext";
import SwiperComponent from "../../../../global/swiperComponent/SwiperComponent";
import EmptyUserSwiperItem from "../../../locale/emptyUserSwiperItem/EmptyUserSwiperItem";
import GameLibraryItem from "../../../locale/gameLibraryItem/GameLibraryItem";

type FilteredGamesSwiperProps = {
  list: LibraryItemType[];
};

function FilteredGamesSwiper({ list }: FilteredGamesSwiperProps) {
  const { removeFromLibrary } = useUser();
  const emptySlotsCount = Math.max(0, 3 - list.length);

  return (
    <SwiperComponent
      props={{
        default: {
          slidesPerView: 1,
          spaceBetween: 16,
          navigation: list.length > 3,
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
      {list.map((game) => (
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
          cover={game.cover}
          key={game.id}
          name={game.name}
          id={game.id}
          action={{
            actionLabel: "Remove from Library",
            actionIcon: HiMiniBookmarkSlash,
            handleClick: () => removeFromLibrary(game.id),
          }}
        />
      ))}
      {Array.from({ length: emptySlotsCount }, (_, i) => (
        <EmptyUserSwiperItem
          additionalStyle={{ aspectRatio: "16/10" }}
          key={i}
        />
      ))}
    </SwiperComponent>
  );
}

export default FilteredGamesSwiper;
