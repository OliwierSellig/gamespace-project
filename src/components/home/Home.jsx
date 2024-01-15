"use client";

import { API_KEY } from "@/utils/data";
import Footer from "../global/Footer";
import Header from "../global/Header";
import Slider from "../global/Slider";
import Favourites from "./Favourites";
import Hero from "./Hero";
import PlatformsHome from "./PlatformsHome";
import { useState, useEffect } from "react";

function Home() {
  const [trendingGames, setTrandingGames] = useState([]);
  const [genresList, setGenresList] = useState([]);

  // ------------------------------------
  // Fetching Trending Games
  // ------------------------------------

  useEffect(function () {
    async function fetchGames() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?dates=2023-01-01,2023-08-31&ordering=-added&key=${API_KEY}`
        );
        const data = await res.json();

        setTrandingGames(data.results.slice(0, 8));
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchGames();
  }, []);

  // ------------------------------------
  // Fetching All Genres
  // ------------------------------------

  useEffect(function () {
    async function fetchGenress() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/genres?key=${API_KEY}`
        );
        const data = await res.json();

        setGenresList(data.results);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchGenress();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Slider
        title="Trending in 2023"
        sliderStyle="slider__trending"
        cardStyle="slider__home"
        list={trendingGames}
      />
      <Favourites />
      <Slider
        title="Something Specific?"
        sliderStyle="slider__genre"
        cardStyle="slider__home"
        list={genresList}
      />
      <PlatformsHome />
      <Footer />
    </>
  );
}

export default Home;
