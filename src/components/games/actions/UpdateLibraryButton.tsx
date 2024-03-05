"use client";

import { useUser } from "../../../contexts/UserContext";
import { SingleGameItem } from "../../../utils/types";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi2";
import Button from "../../global/Button";

type UpdateLibraryButtonProps = {
  game: SingleGameItem;
};

function UpdateLibraryButton({ game }: UpdateLibraryButtonProps) {
  const { addToLibrary, removeFromLibrary, checkInLibrary } = useUser();

  return (
    <Button
      handleClick={() => {
        if (checkInLibrary(game.id)) {
          removeFromLibrary(game.id);
        } else {
          addToLibrary({
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
          });
        }
      }}
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
