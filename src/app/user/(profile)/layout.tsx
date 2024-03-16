import UserContainer from "../../../components/user/layout/UserContainer";
import { ChildrenProp } from "../../../utils/types";

function layout({ children }: ChildrenProp) {
  return <UserContainer>{children}</UserContainer>;
}

export default layout;
