import { ReactNode } from "react";
import bg from "../../../../../public/img/user-background.jpg";
import { useFirebaseUser } from "../../../../contexts/FirebaseUserContext";
import GameBackgroundLayout from "../../../global/gameBackgroundLayout/GameBackgroundLayout";

type UserLayoutProps = {
  children: ReactNode;
};

function UserLayout({ children }: UserLayoutProps) {
  const { state } = useFirebaseUser();
  return (
    <GameBackgroundLayout image={state.profileSettings.background || bg}>
      <>{children}</>
    </GameBackgroundLayout>
  );
}

export default UserLayout;
