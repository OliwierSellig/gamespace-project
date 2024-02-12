import { API_KEY } from "../utils/data";
import { setToDoubleDigit } from "../utils/functions";
import {
  FetchedAchievementsItem,
  FetchedGameData,
  FetchedScreenshotItem,
  SingleGameItem,
  fetchGamesProps,
} from "../utils/types";

export async function fetchGames(options: fetchGamesProps) {
  const paramList = [];

  if (options.search) paramList.push(`search=${options.search}`);
  if (options.page) paramList.push(`page=${options.page}`);
  if (options.pageSize) paramList.push(`page_size=${options.pageSize}`);
  if (
    options.parentPlatforms &&
    options.parentPlatforms.length > 0 &&
    options.parentPlatforms.every((p) => Boolean(p))
  )
    paramList.push(`parent_platforms=${options.parentPlatforms.join(",")}`);
  if (
    options.platforms &&
    options.platforms.length > 0 &&
    options.platforms.every((p) => Boolean(p))
  )
    paramList.push(`platforms=${options.platforms.join(",")}`);
  if (
    options.developers &&
    options.developers.length > 0 &&
    options.developers.every((d) => Boolean(d))
  )
    paramList.push(`developers=${options.developers.join(",")}`);
  if (
    options.genres &&
    options.genres.length > 0 &&
    options.genres.every((g) => Boolean(g))
  )
    paramList.push(`genres=${options.genres.join(",")}`);
  if (
    options.tags &&
    options.tags.length > 0 &&
    options.tags.every((t) => Boolean(t))
  )
    paramList.push(`tags=${options.tags.join(",")}`);
  if (options.dates)
    paramList.push(
      `dates=${options.dates.fromYear}-${setToDoubleDigit(
        options.dates.fromMonth
      )}-${setToDoubleDigit(options.dates.fromDay)},${
        options.dates.toYear
      }-${setToDoubleDigit(options.dates.toMonth)}-${setToDoubleDigit(
        options.dates.toDay
      )}`
    );
  if (options.ordering && options.ordering.orderBy)
    paramList.push(
      `ordering=${options.ordering.reversed ? "-" : ""}${
        options.ordering.orderBy
      }`
    );

  const query = `${
    paramList.length > 0 ? `${paramList.join("&")}&` : ""
  }key=${API_KEY}`;

  try {
    const res = await fetch(`https://api.rawg.io/api/games?${query}`, {
      signal: options.signal,
    });
    const data: FetchedGameData = await res.json();

    return data;
  } catch (error) {}
}

export async function fetchGameByID(id: number) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    const data: SingleGameItem = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function findIsTopGenre({
  id,
  genre,
}: {
  id: number;
  genre: number;
}) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}&page_size=40&ordering=-added`
    );

    const data: FetchedGameData = await res.json();

    const filteredGame = data.results.find((item) => item.id === id);
    return filteredGame
      ? (data.results.indexOf(filteredGame) + 1).toString()
      : "40+";
  } catch (error) {
    console.error(error.message);
  }
}

export async function findIsTopYear({
  id,
  year,
}: {
  id: number;
  year: number;
}) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&dates=${year}-01-01,${year}-12-31&page_size=40&ordering=-added`
    );

    const data: FetchedGameData = await res.json();

    const filteredGame = data.results.find((item) => item.id === id);
    return filteredGame
      ? (data.results.indexOf(filteredGame) + 1).toString()
      : "40+";
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchGameScreenshots(id: number) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`
    );

    const data: FetchedScreenshotItem = await res.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchGameAchievements(id: number) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${id}/achievements?key=${API_KEY}`
    );

    const data: FetchedAchievementsItem = await res.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchSameSeriesGames(pk: string) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games/${pk}/game-series?key=${API_KEY}`
    );

    const data: FetchedGameData = await res.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
