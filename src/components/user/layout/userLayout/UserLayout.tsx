import { ReactNode } from "react";
import bg from "../../../../../public/img/user-background.jpg";
import { useUser } from "../../../../contexts/UserContext";
import GameBackgroundLayout from "../../../global/gameBackgroundLayout/GameBackgroundLayout";

type UserLayoutProps = {
  children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
  const { currentBackground } = useUser();
  return (
    <GameBackgroundLayout image={currentBackground || bg}>
      <>{children}</>
    </GameBackgroundLayout>
  );
}

export default UserLayout;
