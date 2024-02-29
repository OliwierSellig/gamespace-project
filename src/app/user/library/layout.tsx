import LibraryNavigation from "../../../components/user/library/layout/LibraryNavigation";
import { ChildrenProp } from "../../../utils/types";

function layout({ children }: ChildrenProp) {
  return <LibraryNavigation>{children}</LibraryNavigation>;
}

export default layout;
