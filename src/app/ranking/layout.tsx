import { RankingProvider } from "../../contexts/rankingContext/RankingContext";

export const metadata = {
  title: "Ranking",
  description:
    "Discover gaming excellence on GameSpace's top 10 rankings page. Explore the highest-rated or most popular games of your selected timeframe. Stay ahead of the curve with our curated list of gaming greatness.",
};

function layout({ children }) {
  return <RankingProvider>{children}</RankingProvider>;
}

export default layout;
