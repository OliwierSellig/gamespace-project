"use client";

import { HiOutlinePencilSquare } from "react-icons/hi2";
import Button from "../../../global/button/Button";
import { useUser } from "../../../../contexts/UserContext";
import { SingleGameItem } from "../../../../utils/types";

type WriteReviewButtonProps = {
  game: SingleGameItem;
};

function WriteReviewButton({ game }: WriteReviewButtonProps) {
  return (
    <Button
      href={{ url: `/games/${game.id}/review` }}
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
