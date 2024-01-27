import { RankingProvider } from "../../../contexts/RankingContext";

function layout({ children }) {
  return <RankingProvider>{children}</RankingProvider>;
}

export default layout;
