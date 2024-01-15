import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

function laoyut({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default laoyut;
