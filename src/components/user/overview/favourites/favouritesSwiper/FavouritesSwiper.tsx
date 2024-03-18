"use client";

import { useUser } from "../../../../../contexts/UserContext";
import SwiperComponent from "../../../../global/SwiperComponent";
import GameLibraryItem from "../../../locale/gameLibraryItem/GameLibraryItem";
import EmptyUserSwiperItem from "../../../locale/emptyUserSliderItem/EmptyYearItem";
import { HiMiniBookmarkSlash } from "react-icons/hi2";

function FavouritesSwiper() {
  const { favouritesList, updateFavourite } = useUser();
  const emptySlotsCount = Math.max(0, 3 - favouritesList.length);

  return (
    <SwiperComponent
      props={{
        default: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: favouritesList.length > 3,
          loop: favouritesList.length > 3,
        },
        breakpoints: [
          { minWidth: 1024, slidesPerView: 3 },
          { minWidth: 600, slidesPerView: 2 },
        ],
      }}
    >
      {favouritesList.map((game) => (
        <GameLibraryItem
          key={game.id}
          name={game.name}
          id={game.id}
          cover={game.cover}
          action={{
            actionLabel: "Remove from Favourites",
            actionIcon: HiMiniBookmarkSlash,
            handleClick: () => updateFavourite(game.id, "remove"),
          }}
          imageSizes={{
            defalult: { number: 40, unit: "vw" },
            sizes: [
              { maxWidth: 1024, size: { number: 50, unit: "vw" } },
              { maxWidth: 600, size: { number: 95, unit: "vw" } },
            ],
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

export default FavouritesSwiper;
