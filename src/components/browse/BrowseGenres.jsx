"use client";

import { useEffect, useState } from "react";
import GameList from "../global/GameList";
import TurnBtn from "../global/TurnBtn";
import styles from "./browseGenres.module.scss";
import { API_KEY } from "@/utils/data";

function BrowseGenres() {
  const [genresList, setGenresList] = useState([]);
  const [genresAmount, setGenresAmount] = useState(0);
  const [iterator, setIterator] = useState(0);

  // ------------------------------------
  // Fetching Genres
  // ------------------------------------

  useEffect(() => {
    async function fetchGenres() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/genres?key=${API_KEY}`
        );
        const data = await res.json();
        setGenresList(data.results);
        setGenresAmount(data.count);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchGenres();
  }, []);

  // ------------------------------------
  // List Navigation Functions
  // ------------------------------------

  function increaseIterator() {
    if (9 * iterator > genresAmount) return;
    setIterator((i) => i + 1);
  }

  function decreaseIterator() {
    if (!iterator) return;
    setIterator((i) => i - 1);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Browsing Genres</h2>
      <GameList
        gameList={genresList.slice(0 + 9 * iterator, 9 + 9 * iterator)}
        listStyle="list__genres"
      >
        <TurnBtn next={false} size={5.2} handleClick={decreaseIterator} />
        <TurnBtn next={true} size={5.2} handleClick={increaseIterator} />
      </GameList>
    </section>
  );
}

export default BrowseGenres;
