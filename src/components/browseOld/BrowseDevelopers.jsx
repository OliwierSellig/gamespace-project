"use client";

import { useEffect, useState } from "react";
import GameList from "../global/GameList";
import SearchInput from "../global/SearchInput";
import TurnBtn from "../global/TurnBtn";
import styles from "./browseDevelopers.module.scss";
import { API_KEY, loadingStyle } from "@/utils/data";

function BrowseDevelopers() {
  const [developersList, setDevelopersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalDevs, setTotalDevs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // ------------------------------------
  // Fetching Developers
  // ------------------------------------

  useEffect(() => {
    const controller = new AbortController();
    async function fetchDevelopers() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.rawg.io/api/developers?key=${API_KEY}&page=${currentPage}&search=${searchQuery}`
        );
        const data = await res.json();
        setDevelopersList(data.results);
        setTotalDevs(data.count);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDevelopers();

    return function () {
      controller.abort();
    };
  }, [currentPage, searchQuery, setIsLoading]);

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function goNext() {
    if (currentPage * 20 > totalDevs) return;
    setCurrentPage((page) => (page += 1));
  }

  function goPrev() {
    if (currentPage === 1) return;
    setCurrentPage((page) => (page -= 1));
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Browsing Developers</h2>
        <SearchInput
          inputStyle="search__browse"
          placeholder="Search for developers"
          inputValue={searchQuery}
          handleChange={setSearchQuery}
        />
      </header>
      {isLoading && <div style={loadingStyle}>Loading developers...</div>}
      {!isLoading && (
        <GameList gameList={developersList} listStyle="list__developers">
          <TurnBtn next={false} size={5.2} handleClick={goPrev} />
          <TurnBtn next={true} size={5.2} handleClick={goNext} />
        </GameList>
      )}
    </section>
  );
}

export default BrowseDevelopers;
