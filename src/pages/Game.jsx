import { GameProvider } from "../contexts/GameContext";
import GameView from "../components/game/GameView";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";

function Game() {
  return (
    <>
      <Header />
      <GameProvider>
        <GameView />
      </GameProvider>
      <Footer />
    </>
  );
}

export default Game;
