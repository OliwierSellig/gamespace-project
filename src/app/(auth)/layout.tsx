import { ChildrenProp } from "../../utils/types/types";
import GameBackgroundLayout from "../../components/global/gameBackgroundLayout/GameBackgroundLayout";
import backgroundImage from "../../../public/img/user-background.jpg";

function layout({ children }: ChildrenProp) {
  return (
    <GameBackgroundLayout image={backgroundImage}>
      {children}
    </GameBackgroundLayout>
  );
}

export default layout;
