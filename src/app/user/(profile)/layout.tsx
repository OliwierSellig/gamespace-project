import { ChildrenProp } from "../../../utils/types/types";
import UserContainer from "../../../components/user/layout/userContainer/UserContainer";

export const metadata = {
  title: { default: "User", template: "User %s | GameSpace" },
};

function layout({ children }: ChildrenProp) {
  return <UserContainer>{children}</UserContainer>;
}

export default layout;
