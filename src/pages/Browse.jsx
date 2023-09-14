import { Outlet } from "react-router-dom";
import BrownseContainer from "../components/browse/BowseContainer";
import BrowseNav from "../components/browse/BrowseNav";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";

function Browse() {
  return (
    <>
      <Header />
      <BrownseContainer>
        <BrowseNav />
        <Outlet />
      </BrownseContainer>
      <Footer />
    </>
  );
}

export default Browse;
