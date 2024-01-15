"use client";

import GameAchievements from "./GameAchievements";
import GameContainer from "./GameContainer";
import GameBackground from "./GameBackground";
import GameAction from "./GameAction";
import GameInfo from "./GameInfo";
import Slider from "../global/Slider";
import { useGame } from "../../contexts/GameContext";

function GameView() {
  const { isLoading, game, screenshotsList } = useGame();

  return !isLoading && game.id ? (
    <>
      <GameBackground />
      <GameContainer>
        <GameAction />
        <GameInfo />
      </GameContainer>
      <Slider
        list={screenshotsList}
        sliderStyle="slider__games"
        cardStyle="slider__game"
      />
      <GameAchievements />
    </>
  ) : (
    <div
      style={{
        width: "100vw",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3.6rem",
      }}
    >
      Loading the Game Data...
    </div>
  );
}

export default GameView;
