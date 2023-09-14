import styles from "./rankingNav.module.scss";
import Slider from "../global/Slider";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ListDate from "./ListDate";
import { useRanking } from "../../contexts/RankingContext";
import DateSelector from "./DateSelector";

function RankingNav() {
  const { filter } = useParams();
  const navigate = useNavigate();
  const { rankedGamesList, checkForSearch } = useRanking();

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
