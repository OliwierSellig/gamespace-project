"use client";

import { useUser } from "../../../contexts/UserContext";
import { SingleGameItem } from "../../../utils/types";
import { HiOutlineBookmark, HiOutlineBookmarkSlash } from "react-icons/hi2";
import Button from "../../global/Button";

type UpdateWishlistButtonProps = {
  game: SingleGameItem;
};

function UpdateWishlistButton({ game }: UpdateWishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, checkInWishlist, checkInLibrary } =
    useUser();

  return (
    <Button
      handleClick={() => {
        if (checkInWishlist(game.id)) {
          removeFromWishlist(game.id);
        } else {
          addToWishlist({
            name: game.name,
            slug: game.slug,
            cover: game.background_image,
            id: game.id,
          });
        }
      }}
      transition="medium"
      style={{ name: "fill", shade: "white" }}
      disabled={checkInLibrary(game.id)}
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
    </Button>
  );
}

export default UpdateWishlistButton;
