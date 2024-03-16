import { ReactNode } from "react";
import GameBackgroundLayout from "../../global/GameBackgroundLayout";
import bg from "../../../../public/img/user-background.jpg";

type UserLayoutProps = {
  children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
  return <GameBackgroundLayout image={bg}>{children}</GameBackgroundLayout>;
}

export default UserLayout;
