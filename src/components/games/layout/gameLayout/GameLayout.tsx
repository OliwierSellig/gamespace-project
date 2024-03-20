import { ReactNode } from "react";
import { fetchGameByID } from "../../../../lib/games";
import GameBackgroundLayout from "../../../global/gameBackgroundLayout/GameBackgroundLayout";
import PageNotFound from "../../../global/pageNotFound/PageNotFound";

type GameLayoutProps = {
  id: string;
  children: ReactNode;
};

async function GameLayout({ id, children }: GameLayoutProps) {
  const game = await fetchGameByID(parseInt(id));

  if (!game?.id) return <PageNotFound />;

  return (
    <GameBackgroundLayout image={game?.background_image_additional}>
      {children}
    </GameBackgroundLayout>
  );
}

export default GameLayout;
