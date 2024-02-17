import { ReactNode } from "react";
import GameLayout from "../../../components/games/layout/GameLayout";

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