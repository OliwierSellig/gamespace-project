import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useRanking } from "../../contexts/RankingContext";
import Slider from "../global/Slider";
import ListDate from "./ListDate";
import DateSelector from "./DateSelector";
import styles from "./rankingNav.module.scss";

function RankingNav() {
  const { rankedGamesList, checkForSearch } = useRanking();
  const { filter } = useParams();
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.heading}>
          <button
            className={styles.switchBtn}
            onClick={() =>
              navigate(`/ranking/${filter === "rated" ? "trending" : "rated"}`)
            }
          >
            {filter === "rated" && (
              <span className={styles.switchBtn__text}>Top Rated</span>
            )}

            {filter === "trending" && (
              <span className={styles.switchBtn__text}>Trending</span>
            )}
          </button>
          &nbsp;Titles
        </h2>
        <DateSelector />
      </header>
      <Slider
        list={rankedGamesList}
        isLoading={rankedGamesList.length}
        sliderStyle={`slider__ranking__${
          filter === "trending" ? "trending" : "rated"
        }`}
        cardStyle="slider__ranking"
      />
      {checkForSearch() && <ListDate />}
      <Outlet />
    </main>
  );
}

export default RankingNav;
