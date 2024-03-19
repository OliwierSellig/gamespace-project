import { API_KEY } from "../utils/data/global";
import {
  fetchedParentType,
  fetchedParentProps,
  SingleGenreType,
} from "../utils/types";

export async function fetchGenres({ pageSize, page }: fetchedParentProps) {
  const query = `?${pageSize ? `page_size=${pageSize}&` : ""}${
    page ? `page=${page}&` : ""
  }key=${API_KEY}`;

  try {
    const res = await fetch(`https://api.rawg.io/api/genres${query}`);
    const data = await res.json();
    const results: fetchedParentType = data;

    return results;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchGenreById(id: number) {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/genres/${id}?key=${API_KEY}`
    );
    const data = await res.json();
    const results: SingleGenreType = data;

    return results;
  } catch (error) {
    console.error(error.message);
  }
}
