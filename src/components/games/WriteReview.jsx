"use client";

import { useGame } from "../../contexts/GameContext";
import GameReview from "../global/GameReview";

function WriteReview() {
  const { game } = useGame();

  return <GameReview game={game} />;
}

export default WriteReview;
