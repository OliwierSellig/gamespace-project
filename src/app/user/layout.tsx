import { ChildrenProp } from "../../utils/types/types";
import UserLayout from "../../components/user/layout/userLayout/UserLayout";

function layout({ children }: ChildrenProp) {
  return <UserLayout>{children}</UserLayout>;
}

export default layout;
