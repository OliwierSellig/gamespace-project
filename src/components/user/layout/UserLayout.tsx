import { ReactNode } from "react";
import GameBackgroundLayout from "../../global/GameBackgroundLayout";
import bg from "../../../../public/img/user-background.jpg";
import UserContainer from "./UserContainer";

type UserLayoutProps = {
  children: ReactNode;
  params: object;
};

function UserLayout({ children }: UserLayoutProps) {
  return (
    <GameBackgroundLayout image={bg}>
      <UserContainer>{children}</UserContainer>
    </GameBackgroundLayout>
  );
}

export default UserLayout;
