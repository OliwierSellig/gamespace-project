"use client";

import UpdateCollection from "../global/UpdateCollection";
import { useGame } from "../../contexts/GameContext";

function CreateCollection() {
  const { game } = useGame();
  return <UpdateCollection game={game} />;
}

export default CreateCollection;
