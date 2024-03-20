import { ReactNode } from "react";
import bg from "../../../../../public/img/user-background.jpg";
import GameBackgroundLayout from "../../../global/gameBackgroundLayout/GameBackgroundLayout";

type UserLayoutProps = {
  children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
  return <GameBackgroundLayout image={bg}>{children}</GameBackgroundLayout>;
}

export default UserLayout;
