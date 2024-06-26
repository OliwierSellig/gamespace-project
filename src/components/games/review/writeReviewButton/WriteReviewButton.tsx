"use client";

import { HiOutlinePencilSquare } from "react-icons/hi2";
import { SingleGameItem } from "../../../../utils/types/types";
import { useUser } from "../../../../contexts/userContext/UserContext";
import Button from "../../../global/button/Button";

type WriteReviewButtonProps = {
  game: SingleGameItem;
};

function WriteReviewButton({ game }: WriteReviewButtonProps) {
  const { isLoggedIn } = useUser();
  return (
    <Button
      href={{ url: !isLoggedIn ? "/login" : `/games/${game.id}/review` }}
      positionSelf={{ type: "align", pos: "center" }}
      sizeX="xl"
      sizeY="md"
      fontWeight={400}
      borderRadius="md"
      additionalStyle={{ marginBottom: "4.2rem" }}
    >
      <span>Write a review</span>
      <HiOutlinePencilSquare />
    </Button>
  );
}

export default WriteReviewButton;
