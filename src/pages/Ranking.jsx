import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import { RankingProvider } from "../contexts/RankingContext";

function Ranking() {
  return (
    <RankingProvider>
      <Header />
      <Outlet />
      <Footer />
    </RankingProvider>
  );
}

export default Ranking;
