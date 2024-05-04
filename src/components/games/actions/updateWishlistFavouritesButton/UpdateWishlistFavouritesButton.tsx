"use client";

import { useState } from "react";
import { HiOutlineBookmark, HiOutlineBookmarkSlash } from "react-icons/hi2";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";
import { SingleGameItem } from "../../../../utils/types/types";
import { useUser } from "../../../../contexts/UserContext";
import { useLibrary } from "../../../../contexts/libraryContext/LibraryContext";
import { useWishlist } from "../../../../contexts/wishlistContext/WishlistContext";
import Button from "../../../global/button/Button";
import styles from "./updateWishlistFavouritesButton.module.scss";

type UpdateWishlistFavouritesButtonProps = {
  game: SingleGameItem;
};

function UpdateWishlistFavouritesButton({
  game,
}: UpdateWishlistFavouritesButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isLoggedIn } = useUser();
  const { updateFavourite, checkIsFavourite, checkInLibrary } = useLibrary();
  const { addToWishlist, removeFromWishlist, checkInWishlist } = useWishlist();

  async function handleClick() {
    setIsLoading(true);
    if (checkInLibrary(game.id)) {
      await updateFavourite(
        game.id,
        checkIsFavourite(game.id) ? "remove" : "add",
      );
    } else if (checkInWishlist(game.id)) {
      await removeFromWishlist(game.id);
    } else {
      await addToWishlist({
        name: game.name,
        slug: game.slug,
        cover: game.background_image,
        id: game.id,
        added: game.added,
        released: game.released,
        rating: game.rating,
      });
    }
    setIsLoading(false);
  }

  return (
    <Button
      href={{ url: !isLoggedIn ? "/login" : null }}
      handleClick={handleClick}
      isLoading={isLoading}
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
