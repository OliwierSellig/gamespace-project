import { ReactNode } from "react";
import bg from "../../../../../public/img/user-background.jpg";
import { useFirebaseUser } from "../../../../contexts/FirebaseUserContext";
import GameBackgroundLayout from "../../../global/gameBackgroundLayout/GameBackgroundLayout";

type UserLayoutProps = {
  children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
  const { state } = useFirebaseUser();
  const background = state.profileSettings.recentBackgrounds.at(0);
  return (
    <GameBackgroundLayout image={background || bg}>
      <>{children}</>
    </GameBackgroundLayout>
  );
}

export default UserLayout;
