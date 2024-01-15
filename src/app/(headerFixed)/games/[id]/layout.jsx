import GameView from "@/components/games/GameView";
import { GameProvider } from "@/contexts/GameContext";

function layout({ children }) {
  return (
    <GameProvider>
      <GameView />
      {children}
    </GameProvider>
  );
}

export default layout;
