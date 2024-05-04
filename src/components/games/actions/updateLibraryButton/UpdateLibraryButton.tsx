"use client";

import { useState } from "react";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2";
import { SingleGameItem } from "../../../../utils/types/types";
import { useUser } from "../../../../contexts/UserContext";
import { useLibrary } from "../../../../contexts/libraryContext/LibraryContext";
import Button from "../../../global/button/Button";

type UpdateLibraryButtonProps = {
  game: SingleGameItem;
};

function UpdateLibraryButton({ game }: UpdateLibraryButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isLoggedIn } = useUser();
  const { addToLibrary, removeFromLibrary, checkInLibrary } = useLibrary();

  async function handleClick() {
    setIsLoading(true);
    if (checkInLibrary(game.id)) {
      await removeFromLibrary(game.id);
    } else {
      await addToLibrary({
        name: game.name,
        slug: game.slug,
        cover: game.background_image,
        id: game.id,
        developers: game.developers,
        genres: game.genres,
        platforms: game.platforms,
        released: game.released,
        added: game.added,
        addedToLibraryDate: new Date(),
        isFavourite: false,
        rating: game.rating,
      });
    }
    setIsLoading(false);
  }

  return (
    <Button
      href={{ url: !isLoggedIn ? "/login" : null }}
      isLoading={isLoading}
      handleClick={handleClick}
      additionalStyle={{ minWidth: "30rem" }}
      style={{ name: "scale", shade: "dark" }}
    >
      {checkInLibrary(game.id) ? (
        <>
          <span>Remove from Library</span>
          <HiOutlineMinusCircle />
        </>
      ) : (
        <>
          <span>Add to my Library</span>
          <HiOutlinePlusCircle />
        </>
      )}
    </Button>
  );
}

export default UpdateLibraryButton;
