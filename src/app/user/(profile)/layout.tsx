import UserContainer from "../../../components/user/layout/UserContainer";
import { ChildrenProp } from "../../../utils/types";

export const metadata = {
  title: { default: "User", template: "User %s | GameSpace" },
};

function layout({ children }: ChildrenProp) {
  return <UserContainer>{children}</UserContainer>;
}

export default layout;
