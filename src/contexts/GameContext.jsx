"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import { useParams } from "next/navigation";
import { API_KEY } from "@/utils/data";

const GameContext = createContext();

const initialState = {
  game: {},
  topYear: null,
  topGenre: null,
  sameSeriesList: [],
  screenshotsList: [],
  isLoading: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "gameSet":
      return {
        ...state,
        game: action.payload,
      };
    case "loadingStart":
      return {
        ...state,
        isLoading: true,
      };
    case "loadingFinish":
      return {
        ...state,
        isLoading: false,
      };
    case "topYearSet":
      return {
        ...state,
        topYear: action.payload,
      };
    case "topGenreSet":
      return {
        ...state,
        topGenre: action.payload,
      };
    case "sameSeriesSet":
      return {
        ...state,
        sameSeriesList: action.payload,
      };
    case "screenshotsSet":
      return {
        ...state,
        screenshotsList: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();
  const { game } = state;

  // --------------------------------------
  // Fetching The Selected Game Info
  // --------------------------------------

  useEffect(() => {
    async function findGame() {
      try {
        dispatch({ type: "loadingStart" });

        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );

        const data = await res.json();
        dispatch({ type: "gameSet", payload: data });
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch({ type: "loadingFinish" });
      }
    }

    findGame();
  }, [id]);

  // -------------------------------------------------------------------
  // Finding Where The Game Has Ranked In The Year of It's Publishemnt
  // -------------------------------------------------------------------

  useEffect(() => {
    async function findTopYear() {
      try {
        const year = new Date(game.released).getFullYear();
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&dates=${year}-01-01,${year}-12-31&page_size=40&ordering=-added`
        );

        const data = await res.json();

        const filteredGame = data.results.find((item) => item.id === game.id);
        if (filteredGame)
          dispatch({
            type: "topYearSet",
            payload: data.results.indexOf(filteredGame) + 1,
          });
        else
          dispatch({
            type: "topYearSet",
            payload: "40+",
          });
      } catch (error) {
        console.error(error.message);
      }
    }

    if (!game.released) return;

    findTopYear();
  }, [game.released, game.id]);

  // ---------------------------------------------------------
  // Finding Where The Game Has Ranked In It's Main Genre
  // ---------------------------------------------------------

  useEffect(() => {
    async function findTopGenre() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&genres=${game.genres
            .at(0)
            .name.toLowerCase()}&page_size=40&ordering=-added`
        );

        const data = await res.json();

        const filteredGame = data.results.find((item) => item.id === game.id);
        if (filteredGame)
          dispatch({
            type: "topGenreSet",
            payload: data.results.indexOf(filteredGame) + 1,
          });
        else
          dispatch({
            type: "topGenreSet",
            payload: "40+",
          });
      } catch (error) {
        console.error(error.message);
      }
    }

    if (!game.id || !game.genres.length) return;

    findTopGenre();
  }, [game.genres, game.id]);

  // ---------------------------------------------------------
  // Fetching The Games That Are Part of The Same Series
  // ---------------------------------------------------------

  useEffect(() => {
    async function findSameSeries() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}/game-series?key=${API_KEY}&page_size=40`
        );

        const data = await res.json();
        dispatch({ type: "sameSeriesSet", payload: data.results });
      } catch (error) {
        console.error(error.message);
      }
    }

    findSameSeries();
  }, [id]);

  // -------------------------------------
  // Finding Screenshoots from The Game
  // -------------------------------------

  useEffect(() => {
    async function fetchScreenshots() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`
        );

        const data = await res.json();
        dispatch({ type: "screenshotsSet", payload: data.results });
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchScreenshots();
  }, [id]);

  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const value = useContext(GameContext);
  if (value === undefined)
    throw new Error("Game context was used outside of a provider");
  return value;
}

export { GameProvider, useGame };
