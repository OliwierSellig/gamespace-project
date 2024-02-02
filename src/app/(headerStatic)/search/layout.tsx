import SearchHeader from "../../../components/search/SearchHeader";
import { ChildrenProp } from "../../../utils/types";

function layout({ children }: ChildrenProp) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}

export default layout;
