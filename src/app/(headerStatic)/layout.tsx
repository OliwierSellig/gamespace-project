import { ChildrenProp } from "../../utils/types";
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";

function layout({ children }: ChildrenProp) {
  return (
    <>
      <Header isFixed={false} />
      {children}
      <Footer />
    </>
  );
}

export default layout;
