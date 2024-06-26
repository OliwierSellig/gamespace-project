"use client";

import { HiMiniBookmarkSlash } from "react-icons/hi2";
import { useLibrary } from "../../../../../contexts/libraryContext/LibraryContext";
import SwiperComponent from "../../../../global/swiperComponent/SwiperComponent";
import EmptyUserSwiperItem from "../../../locale/emptyUserSwiperItem/EmptyUserSwiperItem";
import GameLibraryItem from "../../../locale/gameLibraryItem/GameLibraryItem";

function FavouritesSwiper() {
  const { getFavourites, updateFavourite } = useLibrary();
  const favouritesList = getFavourites();
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
