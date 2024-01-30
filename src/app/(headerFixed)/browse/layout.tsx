import BrowseLayout from "../../../components/browse/BrowseLayout";
import { BrowseProvider } from "../../../contexts/BrowseContext";

function layout({ children }) {
  return (
    <BrowseProvider>
      <BrowseLayout>{children}</BrowseLayout>
    </BrowseProvider>
  );
}

export default layout;
