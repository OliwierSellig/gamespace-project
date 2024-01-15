import BrowseContainer from "@/components/browse/BowseContainer";
import BrowseNav from "@/components/browse/BrowseNav";

function layout({ children }) {
  return (
    <BrowseContainer>
      <BrowseNav />
      {children}
    </BrowseContainer>
  );
}

export default layout;
