import { ReactNode } from "react";
import { useUserData } from "../../../../hooks/useUserData";
import bg from "../../../../../public/img/user-background.jpg";
import { useAuth } from "../../../../contexts/AuthContext";
import GameBackgroundLayout from "../../../global/gameBackgroundLayout/GameBackgroundLayout";

type UserLayoutProps = {
  children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
  const { currentUser } = useAuth();
  const { data } = useUserData(currentUser.uid, "background");
  const background = data;
  return (
    <GameBackgroundLayout image={background || bg}>
      <>{children}</>
    </GameBackgroundLayout>
  );
}

export default UserLayout;
