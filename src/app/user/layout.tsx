import UserLayout from "../../components/user/layout/UserLayout";
import { ChildrenProp } from "../../utils/types";

function layout({ children }: ChildrenProp) {
  return <UserLayout>{children}</UserLayout>;
}

export default layout;
