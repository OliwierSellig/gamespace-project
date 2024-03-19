"use client";

import { useUser } from "../../../../contexts/UserContext";
import { SingleGameItem } from "../../../../utils/types/types";
import { HiOutlineBookmark, HiOutlineBookmarkSlash } from "react-icons/hi2";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";
import Button from "../../../global/button/Button";
import styles from "./updateWishlistFavouritesButton.module.scss";

type UpdateWishlistFavouritesButtonProps = {
  game: SingleGameItem;
};

function UpdateWishlistFavouritesButton({
  game,
}: UpdateWishlistFavouritesButtonProps) {
  const {
    addToWishlist,
    removeFromWishlist,
    checkInWishlist,
    checkIsFavourite,
    checkInLibrary,
    updateFavourite,
  } = useUser();

  function handleClick() {
    if (checkInLibrary(game.id)) {
      updateFavourite(game.id, checkIsFavourite(game.id) ? "remove" : "add");
    } else if (checkInWishlist(game.id)) {
      removeFromWishlist(game.id);
    } else {
      addToWishlist({
        name: game.name,
        slug: game.slug,
        cover: game.background_image,
        id: game.id,
        added: game.added,
        released: game.released,
        rating: game.rating,
      });
    }
  }

  return (
    <Button
      handleClick={handleClick}
      transition="medium"
      style={{ name: "fill", shade: "white" }}
      additionalStyle={{
        minWidth: "32rem",
        position: "relative",
        height: "5.6rem",
        overflow: "hidden",
      }}
    >
      <span
        className={` ${styles.box} ${
          checkInLibrary(game.id) ? styles.visible : styles.hidden__fav
        }`}
      >
        {checkIsFavourite(game.id) ? (
          <>
            <span>Remove from favourites</span>
            <IoHeartDislikeOutline />
          </>
        ) : (
          <>
            <span>Add to favourites</span>
            <IoHeartOutline />
          </>
        )}
      </span>
      <span
        className={`${styles.box} ${
          checkInLibrary(game.id) ? styles.hidden__wish : styles.visible
        }`}
      >
        {checkInWishlist(game.id) ? (
          <>
            <span>Remove from Wishlist</span>
            <HiOutlineBookmarkSlash />
          </>
        ) : (
          <>
            <span>Add to Wishlist</span>
            <HiOutlineBookmark />
          </>
        )}
      </span>
    </Button>
  );
}

export default UpdateWishlistFavouritesButton;
