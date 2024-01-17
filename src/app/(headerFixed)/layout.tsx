import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import { ChildrenProp } from "../../utils/types";

function laoyut({ children }: ChildrenProp) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default laoyut;
