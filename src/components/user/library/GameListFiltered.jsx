import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import Slider from "../../global/Slider";
import styles from "./gameListFiltered.module.scss";
import { useUtility } from "../../../contexts/UtilityContext";
import BtnNav from "../../global/BtnNav";

const PAGE_AMOUNT = 4;

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
      PAGE_AMOUNT * (curPage + 1)
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
      PAGE_AMOUNT * (curPage + 1)
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
          .slice(PAGE_AMOUNT * curPage, PAGE_AMOUNT + PAGE_AMOUNT * curPage)
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
      <BtnNav
        checkPrev={curPage}
        checkNext={canGoNext}
        onClickNext={goNext}
        onCLickPrev={goPrev}
        curPage={curPage}
      />
    </>
  );
}

export default GameListFiltered;
