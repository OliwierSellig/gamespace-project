import { API_KEY } from "../utils/data";
import { setToDoubleDigit } from "../utils/functions";
import { FetchedGameItem, fetchGamesProps } from "../utils/types";

export async function fetchGames(options: fetchGamesProps) {
  const paramList = [];

  if (options.search) paramList.push(`search=${options.search}`);
  if (options.page) paramList.push(`page=${options.page}`);
  if (options.pageSize) paramList.push(`page_size=${options.pageSize}`);
  if (options.parentPlatforms && options.parentPlatforms.length > 0)
    paramList.push(`parent_platforms=${options.parentPlatforms.join(",")}`);
  if (options.platforms && options.platforms.length > 0)
    paramList.push(`platforms=${options.platforms.join(",")}`);
  if (options.developers && options.developers.length > 0)
    paramList.push(`developers=${options.developers.join(",")}`);
  if (options.genres && options.genres.length > 0)
    paramList.push(`genres=${options.genres.join(",")}`);
  if (options.tags && options.tags.length > 0)
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
  if (options.ordering)
    paramList.push(
      `ordering=${options.ordering.reversed ? "-" : ""}${
        options.ordering.orderBy
      }`
    );

  const query = `${
    paramList.length > 0 ? `${paramList.join("&")}&` : ""
  }key=${API_KEY}`;

  try {
    const res = await fetch(`https://api.rawg.io/api/games?${query}`);
    const data = await res.json();

    const resutls: FetchedGameItem[] = data.results;

    return resutls;
  } catch (error) {
    console.error(error.message);
  }
}
