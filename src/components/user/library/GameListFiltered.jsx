import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import Slider from "../../global/Slider";
import styles from "./gameListFiltered.module.scss";
import { useUtility } from "../../../contexts/UtilityContext";

function GameListFiltered({ filterBy, searchQuery }) {
  const { gamesPlayed } = useUser();
  const { loadingStyle } = useUtility();
  const [filteredList, setFilteredList] = useState([]);
  const [curPage, setCurPage] = useState(0);

  useEffect(() => {
    function filterByPlatform() {
      const parentsList = [
        ...new Set(gamesPlayed.map((game) => game.platform.name)),
      ];

      const filteredPlatforms = parentsList.map((item) => [
        item,
        gamesPlayed.filter((game) => game.platform.name === item),
      ]);
      return filteredPlatforms;
    }

    function filterListBy(type) {
      const uniqueList = [
        ...new Set(
          gamesPlayed.map((game) =>
            type === "developers"
              ? game.game.developers?.at(0).name
              : type === "genres"
              ? game.game.genres?.at(0).name
              : new Date(game.game.released).getFullYear()
          )
        ),
      ];
      const topList = uniqueList.map((item) => [
        item,
        gamesPlayed.filter(
          (game) =>
            (type === "developers"
              ? game.game.developers?.at(0).name
              : type === "genres"
              ? game.game.genres?.at(0).name
              : new Date(game.game.released).getFullYear()) === item
        ),
      ]);
      return topList;
    }

    switch (filterBy) {
      case "platforms":
        setFilteredList(filterByPlatform());
        return;
      case "developers":
        setFilteredList(filterListBy("developers"));
        return;
      case "genres":
        setFilteredList(filterListBy("genres"));
        return;
      case "years":
        setFilteredList(filterListBy("years"));
        return;
      default:
        throw new Error("Filter out of scope");
    }
  }, [gamesPlayed, filterBy]);

  function goNext() {
    if (
      filteredList.filter((item) =>
        String(item.at(0))?.toLowerCase().includes(searchQuery.toLowerCase())
      ).length <
      4 * (curPage + 1)
    )
      return;
    setCurPage((page) => page + 1);
  }
  function goPrev() {
    if (!curPage) return;
    setCurPage((page) => page - 1);
  }

  function canGoNext() {
    return (
      filteredList.filter((item) =>
        String(item.at(0))?.toLowerCase().includes(searchQuery.toLowerCase())
      ).length >
      4 * (curPage + 1)
    );
  }

  return (
    <>
      <ul className={styles.list}>
        {!filteredList.filter((item) =>
          String(item.at(0))?.toLowerCase().includes(searchQuery.toLowerCase())
        ).length && <p style={loadingStyle}>Nothing found...</p>}
        {filteredList
          .filter((item) =>
            String(item.at(0))
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
          .slice(4 * curPage, 4 + 4 * curPage)
          .map((item) => (
            <li key={crypto.randomUUID()}>
              <Slider
                title={item.at(0)}
                list={item.at(1).map((game) => game.game)}
                scale={false}
                sliderStyle="slider__library"
                cardStyle="slider__library"
                user={true}
              />
            </li>
          ))}
      </ul>
      <div className={styles.btnBox}>
        <button
          className={`${styles.btn} ${curPage ? styles.btn__active : ""}`}
          onClick={goPrev}
        >
          <img
            className={styles.btn__icon}
            src={
              curPage
                ? "/svg/round-arrow-left-able.svg"
                : "/svg/round-arrow-left-disable.svg"
            }
            alt="Arrow left"
          />
        </button>
        <span className={styles.page}>{curPage + 1}</span>
        <button
          className={`${styles.btn} ${canGoNext() ? styles.btn__active : ""}`}
          onClick={goNext}
        >
          <img
            className={styles.btn__icon}
            src={
              canGoNext()
                ? "/svg/round-arrow-right-able.svg"
                : "/svg/round-arrow-right-disable.svg"
            }
            alt="Arrow right"
          />
        </button>
      </div>
    </>
  );
}

export default GameListFiltered;
