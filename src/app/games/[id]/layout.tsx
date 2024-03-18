import { ReactNode } from "react";
import GameLayout from "../../../components/games/layout/GameLayout";
import { Metadata } from "next";
import { fetchGameByID } from "../../../lib/games";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const game = await fetchGameByID(parseInt(id));

  if (!game || !game.id) return { title: "Game Not Found" };

  return {
    title: {
      default: `${game.name}`,
      template: `${game?.name} %s | GameSpace`,
    },
    description: `"Dive into the world of ${game.name} with GameSpace's single game view page. Explore detailed information, reviews, and community insights about this captivating title. Your gateway to ${game.name} adventure awaits.`,
  };
}

function layout({
  params,
  children,
}: {
  params: { id: string };
  children: ReactNode;
}) {
  return <GameLayout id={params.id}>{children}</GameLayout>;
}

export default layout;
