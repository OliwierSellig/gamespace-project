import { useEffect, useState } from "react";
import { useUtility } from "../contexts/UtilityContext";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Hero from "../components/home/Hero";
import Slider from "../components/global/Slider";
import Favourites from "../components/home/Favourites";
import PlatformsHome from "../components/home/PlatformsHome";

function Home() {
  const [trendingGames, setTrandingGames] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const { API_KEY } = useUtility();

  // ------------------------------------
  // Fetching Trending Games
  // ------------------------------------

  useEffect(
    function () {
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
    },
    [API_KEY]
  );

  // ------------------------------------
  // Fetching All Genres
  // ------------------------------------

  useEffect(
    function () {
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
    },
    [API_KEY]
  );

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
